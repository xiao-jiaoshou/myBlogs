#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件, yarn docs:build
npm run docs:build
rm -rf ../blog/dist/*

# ��build���ɵ�distĿ¼��������һ��Ŀ¼��
cp -rf dist ../blog/

# 进入生成的文件夹
cd ../blog/dist

# git��ʼ����ÿ�γ�ʼ����Ӱ������
git init
git add -A
git commit -m 'deploy'
git branch -M main

# �������Ҫ���� https://USERNAME.github.io
git push -f git@github.com:it235/it235.github.io.git main