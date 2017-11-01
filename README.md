TQS-Table project starter template for [Ionic](http://ionicframework.com/docs/) projects.

## TQS-Table 项目

创建项目 `TQS-Tablet`, 使用命令如下：

```bash
$ sudo npm install -g ionic cordova
$ ionic start TQS-Tablet sidemenu
```
本地运行 `TQS-Tablet` 命令如下：

```bash
$ ionic serve
```
命令执行成功后会自动打开浏览器，默认地址是：http://localhost:8100，需要在浏览器查看在移动平板的运行效果，在浏览器打开地址：http://localhost:8100/ionic-lab


### `TQS-Table` 移动平台调试

调试运行 `TQS-Tablet` Android平台命令如下：

```bash
$ ionic cordova platform add android
$ ionic cordova build android
```

### `TQS-Tablet` 移动平台发布

更改APP目录下的platforms/android/AndroidManifest.xml文件，把android：debuggable 改为false
```bash
$ ionic cordova build android --release
```
命令执行成功后会自动编译成apk文件，生成的apk还需要生成签名，否则生成的apk是不可用的。


```bash
$ keytool   -genkey   -v   -keystore  TQS-Tablet-release-key.keystore   -alias   TQS-Tablet-release-key.keystore   -keyalg  RSA   -keysize   2048   -validity   10000   
```
根据提示输入相关的密码以及其他信息，成功之后可以再当前目录下看到 名为 myApp-release-key.keystore 的文件

```bash
$ jarsigner   -verbose   -sigalg  SHA256withRSA   -digestalg  SHA1   -keystore  TQS-Tablet-release-key.keystore   TQS-Tablet-release-unsigned.apk   myApp-release-key.keystore

```