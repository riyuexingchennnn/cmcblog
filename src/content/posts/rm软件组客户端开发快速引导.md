---
title: rm软件组客户端开发快速引导
published: 2025-12-01
description: ''
image: ''
tags: [前端开发]
category: 'FYT'
draft: false
lang: ''
---

# rm软件组

26赛季起，Robomaster鼓励制作自定义客户端，rm软件组开发自定义客户端，要设计更多客制化功能和UI，以提高操作手对战场的把控能力。

目标：

- **自定义客户端** ( ⭐⭐⭐ )

    1. 到在联盟赛的时候能做出一版只为test的demo版，目的只是测试赛场环境下的网络交互。
    2. 到分区赛或者明年正式上线自定义客户端

    > 上场可以通过与官方电脑连接网线共享ip地址的形式，让操作手携带的装有自定义客户端的电脑也能连接上裁判系统(规则是否允许，有待商榷)

- **视觉仿真软件** ( ⭐⭐ )

    1. 为能量机关和雷达站提供仿真视频


# 什么人推荐加入rm软件组

1. 计算机专业，想学习计算机客户端软件设计的原理，了解网络请求，业务处理的流程。
2. 准备找工作的同学，此项目完全对标dji的rm专招通道的客户端开发岗位，并且提供转正机会，机不可失。
3. 学习过unity游戏开发的，做过Android Studio项目或者开发过某种客户端的同学。

# 快速开始

只学习一个开发工具，一种语言，快速上手客户端开发

## 环境配置

### Unity配置

- **windows**

    windows安装比较简单，unity适配也比较好，**较推荐**，适合新手。

    如果你不喜欢windows做开发，使用ubuntu也是可以的。

- **ubuntu**

    1. 按顺序安装好unityhub，安装好Unity 2022.3 LTS(2022.3.62f3) Editor, 注册好unity账户，添加Personal License

    2. 安装一个unity的linux补丁工具，解决引擎卡顿问题。
        ```bash
        sudo apt-get install unity-tweak-tool
        ```

        > 如果依然卡顿，检查nvidia-smi显示的功率，查看unity是否使用显卡。

    3. 打开引擎新建一个项目，选择 Edit->Preferences->External Tools->External Scripts Editor，选成你想要的vscode编辑器


### C# 配置

1. 安装 .NET SDK
    ```bash
    sudo apt install dotnet-sdk-8.0
    ```

2. 检查net版本
    ```bash
    dotnet --version # 检查版本
    ```

### Vscode 配置

安装3个插件即可

![](./rm软件组客户端开发快速引导/1.png)
![](./rm软件组客户端开发快速引导/2.png)
![](./rm软件组客户端开发快速引导/3.png)

打开unity项目和对应的vscode代码，等待vscode输出框安装完所有环境后打开代码，检查是否有代码补全提示和语法报错提醒，有即为正常

![](./rm软件组客户端开发快速引导/4.png)


## 制作第一款2D平台跳跃游戏

推荐学习B站up主 **秦无邪OvO** 的入门开发课程

我的开源: https://github.com/riyuexingchennnn/Unity_demo

重点关注：

- unity 引擎使用
- C# 代码编写
- UGUI

少量关注：

- ShaderGraph
- Animator

> 如果你有良好的编程习惯和基础，unity引擎对你而言，就和玩具差不多

## Mock调试

目前收集的开源有:

- [RM2026][江南大学霞客湾校区]自定义客户端模拟数据发送&MQTT可视化数据面板开源 https://bbs.robomaster.com/article/1296480?source=1

- RMMock-自定义客户端协议的第三方后端实现开源https://bbs.robomaster.com/article/1296451
代码：https://github.com/stydxm/RMMock

可以先使用开源，推荐使用第一个，然后在此基础上逐步建立我们自己的rm_mock仓库

### SharkDataSever开源

> 如果你很熟悉Vue，你可以不用采取我的方法，直接跳过此部分教学

1. 使用鱼香ROS一键安装，选择 数字6 NodeJS环境
    ```bash
    wget http://fishros.com/install -O fishros && . fishros
    ```
    然后使用`node --version`查看nodejs版本，我的版本是`v18.20.8`

    如何使用和我一样的版本？安装node版本管理工具nvm，安装18选择18

2. 然后依次安装cnpm、pnpm

    ```bash
    npm install -g cnpm --registry=https://registry.npmmirror.com
    cnpm install -g pnpm
    ```

3. 安装运行

    ```bash
    pnpm install
    pnpm run mqtt-visual
    ```

## Protocol Buffers 入门

官方文档是最好的学习资料：https://protobuf.com.cn/overview/

1. 检查自己电脑的proto编译器的版本

    ```
    sudo apt install -y protobuf-compiler
    protoc --version
    ```

    如果你的电脑显示的版本为`libprotoc 3.12.4`。请注意这是非常老的版本，这个通常是由apt安装的，可以选择安装新版本protoc(旧的可以不用卸载)

2. 安装最新的protoc (⚠️实测不推荐，unity不支持新版)

    https://github.com/protocolbuffers/protobuf/releases

    ![](./rm软件组客户端开发快速引导/5.png)

    解压后复制到/user/local目录中去

    ```bash
    sudo cp bin/protoc /usr/local/bin/
    sudo cp -r include/* /usr/local/include/
    ```

    > /usr/local/bin 的优先级高于 /usr/bin
    所以你的系统会自动使用新的 protoc

    再次检查版本，就可以看到`libprotoc 33.2`

    ⚠️ 注意：不推荐使用export路径的方式加到bashrc里去，因为这只对shell环境有用，容易出其他问题。

3. Protocol Buffer 基础：C#

    [官方文档](https://protobuf.com.cn/getting-started/csharptutorial/)

    下载我整理的proto文件<a href="/files/rm_messages.proto" download="rm_messages.proto">rm_messages.proto</a>

    运行下面指令，会得到一个RmMessages.cs的文件
    ```bash
    protoc --csharp_out=. rm_messages.proto
    ```

## Unity 与 mqtt protobuf

刚刚导入的RmMessages.cs会遇到一个Google.Protobuf依赖不匹配的问题，推荐到Nuget上下载对应3.12.4版本的dll库

https://nuget.info/packages/Google.Protobuf/3.12.4

![](./rm软件组客户端开发快速引导/6.png)

> unity就是这样不好，在unity6之前用的东西全部都很旧，unity2022依然还在使用C#8的版本，很多C#新特性用不了，比如foreach

https://nuget.info/packages/MQTTnet/4.3.3.952

同理，下载MQTTnet.dll，放到unity的Assets/Plugins目录

# 正式开发

## UItoolkit

### 示例：编写第一个页面 开始界面

## mqtt

### 示例：编写第一个mqtt接口 GameStatus

参考Robomaster官方附录三，利用MQTTnet库编写一个脚本main.cs

```bash
using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Protocol;
using System;
using System.Threading.Tasks;
using UnityEngine;
using Google.Protobuf;
using RmMessages;

/// <summary>
/// GameStatus MQTT 客户端
/// 用于实时接收服务器发送的 GameStatus 消息
/// </summary>
public class GameStatusReceiver : MonoBehaviour
{
    [Header("MQTT 连接配置")]
    [SerializeField] private string brokerHost = "127.0.0.1";
    [SerializeField] private int brokerPort = 3333;
    [SerializeField] private string clientId = "rm_custom_client";
    [SerializeField] private string gameStatusTopic = "GameStatus";

    [Header("状态显示")]
    [SerializeField] private bool showDebugInfo = true;

    // MQTT 客户端
    private IMqttClient _mqttClient;

    // 当前游戏状态
    private GameStatus _currentGameStatus;
    public GameStatus CurrentGameStatus => _currentGameStatus;

    // 事件：当 GameStatus 更新时触发
    public event Action<GameStatus> OnGameStatusUpdated;

    // 线程安全的消息队列
    private readonly System.Collections.Concurrent.ConcurrentQueue<GameStatus> _messageQueue
        = new System.Collections.Concurrent.ConcurrentQueue<GameStatus>();

    private void Start()
    {
        _currentGameStatus = new GameStatus();
        ConnectToMqttBroker();
    }

    private void Update()
    {
        // 在主线程中处理接收到的消息
        while (_messageQueue.TryDequeue(out GameStatus status))
        {
            _currentGameStatus = status;
            OnGameStatusUpdated?.Invoke(status);

            if (showDebugInfo)
            {
                LogGameStatus(status);
            }
        }
    }

    private void OnDestroy()
    {
        Disconnect();
    }

    private void OnApplicationQuit()
    {
        Disconnect();
    }

    /// <summary>
    /// 连接到 MQTT Broker
    /// </summary>
    public async void ConnectToMqttBroker()
    {
        try
        {
            Debug.Log($"[GameStatusReceiver] 正在连接到 MQTT Broker: {brokerHost}:{brokerPort}");

            // 客户端选项生成器
            var options = new MqttClientOptionsBuilder()
                .WithClientId(clientId)
                .WithTcpServer(brokerHost, brokerPort)
                .Build();

            // 创建客户端
            _mqttClient = new MqttFactory().CreateMqttClient();

            // 监测客户端 连接/断开连接 完成
            _mqttClient.ConnectedAsync += OnClientConnected;
            _mqttClient.DisconnectedAsync += OnClientDisconnected;

            // 客户端接收到消息
            _mqttClient.ApplicationMessageReceivedAsync += OnMessageReceived;

            // 连接服务器
            await _mqttClient.ConnectAsync(options);
        }
        catch (Exception ex)
        {
            Debug.LogError($"[GameStatusReceiver] 连接异常: {ex.Message}");
        }
    }

    /// <summary>
    /// 连接完成回调
    /// </summary>
    private Task OnClientConnected(MqttClientConnectedEventArgs args)
    {
        Debug.Log("[GameStatusReceiver] 成功连接到 MQTT Broker");

        // 订阅 GameStatus 主题
        Subscribe(gameStatusTopic);

        return Task.CompletedTask;
    }

    /// <summary>
    /// 断开连接回调
    /// </summary>
    private Task OnClientDisconnected(MqttClientDisconnectedEventArgs args)
    {
        Debug.Log("[GameStatusReceiver] 已断开 MQTT 连接");
        return Task.CompletedTask;
    }

    /// <summary>
    /// 接收到消息回调
    /// </summary>
    private Task OnMessageReceived(MqttApplicationMessageReceivedEventArgs args)
    {
        try
        {
            string topic = args.ApplicationMessage.Topic;
            byte[] payload = args.ApplicationMessage.PayloadSegment.ToArray();

            if (showDebugInfo)
            {
                Debug.Log($"[GameStatusReceiver] 收到消息 topic: {topic}");
            }

            // 如果是 GameStatus 主题，解析 Protobuf 消息
            if (topic == gameStatusTopic)
            {
                GameStatus status = GameStatus.Parser.ParseFrom(payload);
                _messageQueue.Enqueue(status);
            }
        }
        catch (Exception ex)
        {
            Debug.LogError($"[GameStatusReceiver] 解析消息失败: {ex.Message}");
        }

        return Task.CompletedTask;
    }

    /// <summary>
    /// 订阅主题
    /// </summary>
    public void Subscribe(string topic)
    {
        _mqttClient?.SubscribeAsync(new MqttTopicFilterBuilder().WithTopic(topic).Build());
        Debug.Log($"[GameStatusReceiver] 已订阅主题: {topic}");
    }

    /// <summary>
    /// 发布字节消息
    /// </summary>
    public void PublishBytesMsg(string topic, byte[] message,
        MqttQualityOfServiceLevel level = MqttQualityOfServiceLevel.ExactlyOnce,
        bool isRetain = false)
    {
        _mqttClient?.PublishBinaryAsync(topic, message, level, isRetain);
    }

    /// <summary>
    /// 断开 MQTT 连接
    /// </summary>
    public async void Disconnect()
    {
        if (_mqttClient != null && _mqttClient.IsConnected)
        {
            try
            {
                await _mqttClient.DisconnectAsync();
            }
            catch (Exception ex)
            {
                Debug.LogWarning($"[GameStatusReceiver] 断开连接时出错: {ex.Message}");
            }
        }
    }

    /// <summary>
    /// 输出 GameStatus 调试信息
    /// </summary>
    private void LogGameStatus(GameStatus status)
    {
        string stageDesc = status.CurrentStage switch
        {
            0 => "未开始比赛",
            1 => "准备阶段",
            2 => "裁判系统自检",
            3 => "五秒倒计时",
            4 => "比赛中",
            5 => "比赛结算中",
            _ => "未知阶段"
        };

        Debug.Log($"[GameStatus] 第 {status.CurrentRound}/{status.TotalRounds} 局 | " +
                  $"红方: {status.RedScore} vs 蓝方: {status.BlueScore} | " +
                  $"阶段: {stageDesc} | " +
                  $"倒计时: {status.StageCountdownSec}s | " +
                  $"已用时: {status.StageElapsedSec}s | " +
                  $"暂停: {status.IsPaused}");
    }

    /// <summary>
    /// 获取当前阶段描述
    /// </summary>
    public string GetCurrentStageDescription()
    {
        return _currentGameStatus?.CurrentStage switch
        {
            0 => "未开始比赛",
            1 => "准备阶段",
            2 => "裁判系统自检",
            3 => "五秒倒计时",
            4 => "比赛中",
            5 => "比赛结算中",
            _ => "未知阶段"
        };
    }
}
```

运行unity，打开Mock测试端，发送GameStatus消息。如果在unity中看到有收到这个话题消息，即为成功

![](./rm软件组客户端开发快速引导/7.png)


