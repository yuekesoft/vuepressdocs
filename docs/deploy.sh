#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# name: setup aliyun oss

uses: manyuanrong/setup-ossutil@master
with:
endpoint: oss-cn-hangzhou.aliyuncs.com
access-key-id: ${{secrets_OSS_KEY_ID}}
access-key-secret: ${{secrets_OSS_KEY_SECRET}}

# name: rm files from aliyun
run: ossutil rm oss://vuepressdocs/ -rf
# name: cp files to aliyun
run: ossutil cp -rf .vuepress/dist  oss://vuepressdocs/
