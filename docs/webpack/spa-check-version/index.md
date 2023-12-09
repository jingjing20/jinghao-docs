# SpaPageCheckVersionPlugin

## 背景

- 我在公司负责某个后台系统项目的日常需求迭代，用户在用户群反馈系统问题后，我们开发人员就会帮用户排查解决问题
- 然后在修复问题后再重新部署发布一次应用，同时通知用户问题已经修复
- 为了避免缓存的原因导致用户使用的还是修复前有问题的页面，我们都会在通知用户问题已修复的时候，让用户刷新下页面再试
- 想着实现一个可以自动检查应用版本的 `webpack` 插件，在每次应用发布后都会自动检查版本是否有更新，如果有更新，就会给用户一个提示同时自动刷新页面


## 具体实现

### SpapageCheckVersionPlugin.js

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

function headerInsertVariable(html, resolvePath, version) {
  return html.replace(
    /<\/head>/i,
    `<script>window.__PUBLIC_PATH__ = "${resolvePath}";window.__STATIC_VERSION__ = ${version}</script></head>`
  );
}

function SpapageCheckVersion(options = {}) {
  const defaultOptions = {
    templateName: 'index.html', // 默认模板文件
    version: new Date().getTime(), // 版本信息
    publicPath: '/', // 访问路径
    updateContent: '', // 本次更新内容
    updateTime: new Date().getTime(), // 记录更新时间
    isVite: false, // 是否是vite
    run: false // 是否运行插件
  };

  if (options.publicPath) {
    if (options.publicPath.indexOf('http') === -1 && options.publicPath.substr(0, 1) !== '/') {
      options.publicPath = '/' + options.publicPath;
    }

    if (options.publicPath.substr(-1, 1) !== '/') {
      options.publicPath = options.publicPath + '/';
    }
  }

  if (options.templateName === '') {
    options.templateName = defaultOptions.templateName;
  }

  this.options = Object.assign(defaultOptions, options);
  const { run, version, updateContent, updateTime, publicPath } = this.options;

  // 是否是vite
  if (this.options.isVite) {
    return {
      name: 'spapage-check-version',
      transformIndexHtml(html) {
        // 用来遍历 html 节点
        if (run) {
          // 参数传递是否运行插件
          // 追加版本号及public路径
          return headerInsertVariable(html, publicPath, version);
        }
      },
      generateBundle() {
        // 已经编译过的代码块生成阶段
        if (run) {
          const fileName = 'updateInfo.json';
          const fileContent = `{"version":"${version}","updateContent":"${updateContent}","updateTime": ${updateTime}}`;

          // 创建极小的入口文件，配合 hash 和主应用时间戳缓存处理
          this.emitFile({
            type: 'asset',
            fileName,
            source: fileContent
          });
        }
      }
    };
  }
}

// 兼容webpack插件
SpapageCheckVersion.prototype.apply = function (compiler) {
  if (this.options.run) {
    const { templateName, publicPath, version, updateContent, updateTime } = this.options;

    // 编译阶段完成时，追加打包版本号
    compiler.hooks.afterCompile.tapAsync('SpapageCheckVersion', (compilation, callback) => {
      HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tap('SpapageCheckVersion', (data) => {
        const { html } = data;
        data.html = headerInsertVariable(html, publicPath, version);
        return data;
      });

      let assetNames = Object.keys(compilation.assets);
      for (const fileName of assetNames) {
        // 找到模板文件，追加当前打包版本信息
        if (fileName.endsWith(templateName)) {
          let source = compilation.assets[fileName].source();
          source = headerInsertVariable(source, publicPath, version);

          // if(source.indexOf('window.__STATIC_VERSION__') === -1) {
          compilation.assets[fileName] = {
            source: function () {
              return source;
            },
            size: function () {
              return source.length;
            }
          };
          // }
        }
      }
      callback();
    });

    // 所有模块的转换和代码块对应的文件已经生成好， 即将输出需要输出的资源，新增更新文件json
    compiler.hooks.emit.tapAsync('SpapageCheckVersion', (compilation, callback) => {
      console.log(':::::::生成更新文件:::::::');
      // 设置名称为 fileName 的输出资源
      const fileName = 'updateInfo.json';
      const fileContent = `{"version":"${version}","updateContent":"${updateContent}","updateTime": ${updateTime}}`;

      compilation.assets[fileName] = {
        source: () => {
          return fileContent;
        },
        size: () => {
          return fileContent.length;
        }
      };
      callback();
    });
  }
};

module.exports = SpapageCheckVersion;
```

### check.js

```js
function getJson(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200 || xhr.status == 304) {
        callback(xhr.responseText);
      }
    }
  };
  xhr.send();
}

/**
 * 检测版本并触发页面刷新
 * @param cVersion 当前版本号
 * @param requestFilePath 版本信息路径
 * @param callback 检测完成回调
 * @returns
 */
export function checkVersionInfo(opts) {
  var cVersion = window.__STATIC_VERSION__,
    publicPath = window.__PUBLIC_PATH__ || '/',
    timestamp = new Date().getTime(),
    requestFilePath = publicPath + 'updateInfo.json?t=' + timestamp,
    callback = opts.callback;

  // 判断当前版本信息是否正确
  if (cVersion === null || cVersion === undefined || cVersion === 0) {
    return;
  }

  getJson(requestFilePath, (res) => {
    try {
      var reply = JSON.parse(res);
      if (callback && typeof callback === 'function') {
        callback && callback(cVersion != reply.version, reply);
      } else if (reply.version && cVersion != reply.version) {
        window.location.reload();
      }
    } catch (error) {
      if (callback && typeof callback === 'function') {
        callback && callback(false, reply);
      }
    }
  });
}
```

## 使用示例

- 安装插件

```shell
# npm i spapage-check-version --save
# yarn add spapage-check-version -S
# pnpm add spapage-check-version
```

### webpack 使用插件

```js
// 引入插件
const SpapageCheckVersion = require('spapage-check-version');

// webpack plugins部分配置插件
{
  // ... 其他配置
  plugins: [
    new SpapageCheckVersion({
      run: true, // 必填，是否运行插件
      publicPath: '', // 选填，访问时运行目录，如根目录无需填写
      templateName: '', // 选填，模板文件，默认查找index.html，如修改过的话，需要传入模板名称
      updateContent: '' //选填，本次更新内容，如果有自定义需求可传入，会在检测新版本时返回该更新内容
    })
  ];
}
```

### vite 使用插件

```js
// 引入插件
const SpapageCheckVersion = require('spapage-check-version');

// vite配置
defineConfig({
  // ... 其他配置
  plugins: [
    {
      ...SpapageCheckVersion({
        run: true, // 必填，是否运行插件
        isVite: true, // 必填，vite标识，目前该插件webpack版本和vite版本放在一个文件中，用于区别来自哪个版本
        publicPath: '', // 选填，访问时运行目录，如根目录无需填写
        templateName: '', // 选填，模板文件，默认查找index.html，如修改过的话，需要传入模板名称
        updateContent: '' //选填，本次更新内容，如果有自定义需求可传入，会在检测新版本时返回该更新内容
      }),
      apply: 'build' // 运行时机：打包
    }
  ]
});
```

### 触发检测时机【路由切换】

```js
import { checkVersionInfo } from 'spapage-check-version/dist/es/check';

historyRouter.afterEach(() => {
  // 调用检测功能
  checkVersionInfo({
    callback: (result) => {
      // 选填，回调参数，result为是否有新版本，如未传改参数则自动刷新页面
      if (result) {
        Vue.prototype.$toast({
          content: '新功能上线，为您自动刷新，请稍后~',
          type: 'info',
          duration: 3000
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 1000);
      }
    }
  });
});
```
