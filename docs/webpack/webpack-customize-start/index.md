# 启动巨石项目中的某些特定模块实现

## 背景

- 在公司我们小组主要负责一个大数据管理平台的日常开发迭代
- 这个项目是一个较老的巨石项目，用的 webpack4，总共有 `42` 个子模块，每次启动服务花费时间太长，平均大概得有 5 分钟
- 其实我们六七个人每个人负责几个系统，平时大多数时间都只需要在一个子模块写代码，但是要把整个系统所有模块都启动，这个问题很影响我们的开发体验
- 我想把这个问题优化一下，提高下我们小组的日常开发体验

## 调研方案

- 网上调研了下，同时结合我们项目实际情况，实现了这种可以自由选择特定模块启动本地服务的功能
- 启动项目的时间成功由原来的 5 分钟缩短至秒级。

## 具体实现

### 终端脚本实现

```js
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const { spawn } = require('child_process');
const cloneDeep = require('lodash/cloneDeep');

const rcPath = path.join(__dirname, '.datastarrc');

const whiteList = ['audit', 'clusterManage', 'oneservice', 'onepool', 'manage'];

const loadOptions = () => {
  let options;
  if (fs.existsSync(rcPath)) {
    try {
      options = JSON.parse(fs.readFileSync(rcPath, 'utf-8'));
    } catch (e) {
      console.error(
        `Error loading saved preferences: ` +
          `~/.datastarrc may be corrupted or have syntax errors. ` +
          `Please fix/delete it and re-run in manual mode.\n` +
          `(${e.message})`
      );
      // eslint-disable-next-line no-undef
      exit(1);
    }
    return options;
  } else {
    fs.writeFile(rcPath, JSON.stringify([]), (err) => {
      if (err) {
        console.error('写入文件时发生错误：', err);
      }
    });
    return [];
  }
};

// 获取所有子目录
function getSubdirectories(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    const subdirectories = fs
      .readdirSync(directoryPath)
      .filter((file) => fs.statSync(path.join(directoryPath, file)).isDirectory());
    return subdirectories;
  } else {
    return [];
  }
}

// 实际业务中的所有模块
const directoryPath = 'src/package';
const moduleConfig = getSubdirectories(directoryPath).filter((item) => whiteList.indexOf(item) === -1);

//选中的模块
let chooseModules = [];

let presetOptions = loadOptions();

const isManualMode = (answers) => answers.preset === '__manual__' || presetOptions.length === 0;
// 问题数组
const questions = [
  {
    type: 'checkbox',
    name: 'modules',
    message: '请选择启动的模块，回车运行。注意: 直接敲击回车会只会编译个人中心模块',
    pageSize: 10,
    when: isManualMode,
    loop: false,
    choices: moduleConfig.map((item) => {
      return {
        name: item,
        value: item
      };
    })
  },
  {
    name: 'save',
    type: 'confirm',
    message: 'Save this as a preset for next start project?',
    default: true,
    when: isManualMode
  },
  {
    name: 'saveName',
    when: (answers) => answers.save,
    type: 'input',
    message: 'Save preset as:'
  }
];
if (presetOptions && presetOptions.length > 0) {
  questions.unshift({
    type: 'list',
    name: 'preset',
    message: 'Choose a preset of project',
    choices: presetOptions
      .map((item) => {
        return {
          name: `${item.name} 【${item.modules}】`,
          value: item.modules
        };
      })
      .concat([
        {
          name: 'Manually select features',
          value: '__manual__'
        }
      ])
  });
}

const saveOptions = (toSave) => {
  let options;
  if (presetOptions.length > 0 && toSave[0].name === 'default') {
    presetOptions.forEach((item) => {
      if (item.name === 'default') {
        item.modules = toSave[0].modules;
      }
    });
    options = presetOptions;
  } else {
    options = cloneDeep(presetOptions || []).concat(toSave);
  }
  try {
    fs.writeFileSync(rcPath, JSON.stringify(options, null, 2));
    return true;
  } catch (e) {
    console.error(`Error saving preferences: ` + `make sure you have write access to ${rcPath}.\n` + `(${e.message})`);
  }
};

const generateRoutes = () => {
  let realRunRouter = ``;
  chooseModules.forEach((item) => {
    realRunRouter += `import ${item} from '@/package/${item}/router'; // ${item}\n`;
  });
  realRunRouter += `export default [\n`;
  chooseModules.forEach((item) => {
    realRunRouter += `...${item},\n`;
  });
  realRunRouter += `{
        path: '*',
        title: '404',
        publicPage: true,
        component: () => import('@/package/404.vue')
    }\n`;
  realRunRouter += `]\n`;
  // console.log(realRunRouter, 'realRunRouter');
  fs.writeFile('./router.nav.js', realRunRouter, (err) => {
    if (err) {
      console.error('写入文件时发生错误:', err);
    } else {
      // 使用 spawn 方法执行 scripts 命令
      const npmProcess = spawn('pnpm', ['dev:select'], { stdio: 'inherit' });
    }
  });
};

// 使用 inquirer.prompt 提问用户
inquirer
  .prompt(questions)
  .then((answers) => {
    // console.log('Answers:', answers);
    if (answers.preset && answers.preset !== '__manual__') {
      chooseModules = answers.preset;
    } else {
      if (answers.save) {
        const options = [
          {
            name: answers.saveName ? answers.saveName : 'default',
            modules: answers.modules.length === 0 ? ['auth'] : answers.modules
          }
        ];
        saveOptions(options);
      }
      if (answers.modules.length === 0) {
        chooseModules = ['auth'];
      } else {
        chooseModules = answers.modules;
      }
    }
    // console.log(chooseModules, 'chooseModules');
    generateRoutes();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

### webpack 改造

```js
plugins: [
  process.env.NODE_SELECT && new webpack.NormalModuleReplacementPlugin(/src\/nav.js$/, '../router.nav.js')
].filter(Boolean);
```
