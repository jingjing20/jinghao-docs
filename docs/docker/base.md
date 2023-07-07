# docker 基础

- `Docker` 是一种容器技术，它可以在操作系统上创建多个相互隔离的容器。容器内可以独立安装软件、运行服务。

![Alt text](image.png)

- 但是，这个容器和宿主机还是有关联的，比如可以把宿主机的端口映射到容器内的端口、宿主机某个目录挂载到容器内的目录。

![Alt text](image-1.png)

## dockerfile 解释

```shell
FROM node:18

WORKDIR /app

COPY package.json .

COPY *.lock .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "./dist/main.js" ]
```

- FROM `node:18` 是继承 `node:18` 基础镜像。

- `WORKDIR /app` 是指定当前目录为 `/app`

- `COPY` 复制宿主机的 `package.json` 和 `lock` 文件到容器的当前目录，也就是 `/app` 下

- `RUN` 是执行命令，这里执行了 `npm install`。

- 然后再复制其余的文件到容器内。

- `EXPOSE` 指定容器需要暴露的端口是 `3000`

- `CMD` 指定容器跑起来时执行的命令是 `node ./dist/main.js`

## 构建镜像命令

```shell
docker build -t dockerfile-test:first .
```

- `-t` 是指定名字和标签，这里镜像名为 `dockerfile-test` 标签为 `first`
- 最后面的 `.` 指的是构建路径为当前根目录，默认会在当前目录下找 `dockerfile` 文件，如果不是当前目录，可以指定 `dockerfile` 文件的路径。

### 运行容器命令

```shell
docker run -d -p 2333:3000 --name jingjing dockerfile-test:first
```

- -d 是后台运行。

- -p 指定端口映射，映射宿主机的 2333 端口到容器的 3000 端口。

- --name 指定容器名



### 技巧一：使用 alpine 镜像，而不是默认的 linux 镜像【减小体积】

- 修改一下上述 dockerfile 内容

```shell
FROM node:18   改成   FROM node:18-alpine3.14
```

- 重新build一下镜像【换个名字】

```shell
docker build -t dockerfile-test:second .
```

- 可以打开 docker desktop 看到 second 这个镜像会比 first 这个镜像体积减少大约 900M



### 技巧二：使用多阶段构建

