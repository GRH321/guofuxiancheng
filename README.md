# 郭富县城博客网站1.0

### 一、项目状况

本项目基本功能已经实现，因电脑系统需要重装暂时将项目搁置命名为1.0版本
目前存在的问题有：
    1、从后台管理页面向数据库提交封面图标无法在数据库创建数据，导致封面无法显示
    2、个人简历页面待完成

### 二、启动项目

1. 启动项目之前，先按下面第四节的内容，在mysql数据库中创建guofuxiancheng数据库。
2. 在server目录中使用`npm install`下载依赖，然后执行`npm run dev`即可启动项目（启动前请先创建数据库，下面内容有介绍）
3. 在client目录中使用`npm install`下载依赖，然后执行`npm run serve`即可启动项目
4. 访问http://127.0.0.1:8080/#/login可以进入后台登录页面
5. 访问http://127.0.0.1:7001/可以打开前端展示页。

### 三、项目结构

* code：项目前端（基于vue+element-ui）
 ![blog1](https://user-images.githubusercontent.com/101340666/166187598-c9046e5d-1497-4d37-a9cf-e91b9493489c.png)
* server：项目服务器端（基于node，egg，mysql）
 ![0](https://user-images.githubusercontent.com/101340666/166187572-e65da061-1873-459b-98b5-a6683ee1b043.png)



### 四、数据库初始化

``` sql
-- 使用下面语句创建数据库
create database xiaozhoucms default character set utf8mb4 collate utf8mb4_unicode_ci;
-- 启动egg项目后，所有数据表会自动创建，然后使用下面语句创建管理员用户。
insert into users (
    username,
    password,
    created_at,
    updated_at
) values (
    "admin",
    "e10adc3949ba59abbe56e057f20f883e",
    "2020-10-01",
    "2020-10-01"
);
-- 管理员用户名为admin，密码使用md5加密，所以初始值设置为‘123456’的加密字符串。
```

### 五、联系作者

![xiaoguo](https://user-images.githubusercontent.com/101340666/166187846-e9bdd1ba-cd37-4287-b50f-7742ff042b27.jpg)



