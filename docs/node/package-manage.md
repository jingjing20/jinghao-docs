# 包管理工具

## 常用命令

### npm:

- `npm install <package-name>`: 安装一个 npm 包。
- `npm install`: 安装项目中 package.json 中列出的所有依赖。
- `npm uninstall <package-name>`: 卸载一个 npm 包。
- `npm update <package-name>`: 更新一个 npm 包。
- `npm list`: 列出项目的所有依赖及其版本。
- `npm search <package-name>`: 搜索一个 npm 包。
- `npm init`: 初始化一个新的 npm 项目，生成 package.json 文件。

### Yarn:

- `yarn add <package-name>`: 安装一个包。
- `yarn install`: 安装项目中 yarn.lock 中列出的所有依赖。
- `yarn remove <package-name>`: 卸载一个包。
- `yarn upgrade <package-name>`: 更新一个包。
- `yarn list`: 列出项目的所有依赖及其版本。
- `yarn search <package-name>`: 搜索一个包。
- `yarn init`: 初始化一个新的项目，生成 package.json 文件。

### pnpm:

- `pnpm install <package-name>`: 安装一个包。
- `pnpm install`: 安装项目中 pnpm-lock.yaml 中列出的所有依赖。
- `pnpm uninstall <package-name>`: 卸载一个包。
- `pnpm update <package-name>`: 更新一个包。
- `pnpm ls`: 列出项目的所有依赖及其版本。
- `pnpm search <package-name>`: 搜索一个包。
- `pnpm init`: 初始化一个新的项目，生成 package.json 文件。


## 查看和切换工具源的命令

### npm:

- 查看当前使用的源：`npm config get registry`
- 切换源到官方源：`npm config set registry https://registry.npmjs.org/`
- 切换源到淘宝源：`npm config set registry https://registry.npm.taobao.org/`

### Yarn:

- 查看当前使用的源：`yarn config get registry`
- 切换源到官方源：`yarn config set registry https://registry.yarnpkg.com/`
- 切换源到淘宝源：`yarn config set registry https://registry.npm.taobao.org/`

### pnpm:

- 查看当前使用的源：`pnpm config get registry`
- 切换源到官方源：`pnpm config set registry https://registry.npmjs.org/`
- 切换源到淘宝源：`pnpm config set registry https://registry.npm.taobao.org/`

