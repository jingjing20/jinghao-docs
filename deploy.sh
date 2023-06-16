#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist

# echo 'jinghao.xyz' > CNAME

git init
git add -A
git commit -m 'update'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:jingjing20/jingjing20.github.io.git master
cd -