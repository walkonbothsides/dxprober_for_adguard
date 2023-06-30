# dxprober_for_adguard
[![GitHub license](https://img.shields.io/github/license/walkonbothsides/dxprober_for_adguard.svg?style=flat-square&label=License&color=00ADD8&logo=github)](https://github.com/walkonbothsides/dxprober_for_adguard/)
## 配合 ![32](.\images\32.svg)AdGuard 食用的舞萌 DX 查分器数据导入扩展（for Android and Windows) 
❗iOS 设备如果有相同需求推荐 [realZnS/dxprober.js](https://github.com/realZnS/dxprober.js)，本脚本理论上可以在 AdGuard for iOS 上运行，但不能保证运行效果

|Windows|![Android](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/20px-Android_robot.svg.png)Android|
| :-----------: | :-----------: |
|![PC](.\images\屏幕截图 2023-06-30.png)|![Phone](.\images\Screenshot_2023-06-30.jpg)|


## 需求

- 舞萌 DX 查分器账户
- 安装 AdGuard 且能流畅运行微信的设备

## 限制

## 使用指南

### 准备

从源代码或 Release 直接下载 dxprober_for_adguard.user.js，并将末尾处的 USERNAME 和 PASSWORD 改为查分器账户的用户名和密码

加速链接：https://raw.iqiq.io/walkonbothsides/dxprober_for_adguard/main/dxprober_for_adguard.user.js

### Android 端

### Windows 端
安装 AdGuard for Windows 后默认会自己安装根证书并开始 HTTPS 过滤，我们需要将微信浏览器的进程加入 AdGuard 的过滤应用列表。

![屏幕截图 2023-06-30 155424](images\屏幕截图 2023-06-30 155424.png)

已知微信浏览器的进程名为 WeChatAppEx.exe，可直接搜索添加。

![屏幕截图 2023-06-30 160503](images\屏幕截图 2023-06-30 160503.png)

![屏幕截图 2023-06-30 160602](images\屏幕截图 2023-06-30 160602.png)

在同页面的扩展处导入已经下载和调整后的脚本并启用即可

![屏幕截图 2023-06-30 161703](images\屏幕截图 2023-06-30 161703.png)![屏幕截图 2023-06-30 161530](images\屏幕截图 2023-06-30 161530.png)
