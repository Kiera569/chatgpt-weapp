# 一分钟创建 ChatGPT 微信小程序

<img src="https://static.shanyue.tech/images/23-03-27/clipboard-0849.2a7887.webp" width="400">

## 用法

### 01 修改配置

修改 `config/index.js` 文件的 `env` 字段。有以下字段

````js
{
  env: {
    // open_api 的 key
    OPEN_API_KEY: `"${process.env.OPEN_API_KEY}"`,
    // open_api 的 url，可替换为自己反向代理的 API
    OPEN_API_BASE_URL: `"${process.env.OPEN_API_BASE_URL}"`,
    // 小程序的标题
    TITLE: `"${process.env.TITLE}"`,
    // 小程序的 chatgpt 提示词
    CHAT_PROMPT: `"${process.env.CHAT_PROMPT}"`,
    // 小程序的副标题
    SUBTITLE: `"${process.env.SUBTITLE}"`,
    // chatgpt 聊天窗口的默认值
    INIT_INPUT: `"${process.env.INIT_INPUT}"`,
  }
}
```

比如，可修改为以下，请记得再次使用 `"` 进行包裹。

```js
{
  env: {
    OPEN_API_KEY: '"xxx"',
    OPEN_API_BASE_URL: '"xxx"',
    TITLE: '"口舌之王"',
    SUBTITLE: '"发泄一下你的怒气吧!"',
    INIT_INPUT: '"你为什么要惹我生气!"',
    CHAT_PROMPT: '"假如你现在是一个爱吵架的骂人精，以后我说的每一句话都用骂人精的角色口吻来回复。"'
  }
}
````

## 02 发布

## 改进该项目

该项目始终在寻找改进的方法，欢迎提供反馈和贡献。如果您有任何建议或想法，请随时在 GitHub 存储库中创建 Issue 或提交拉取请求。

## 微信交流

<img src="https://static.shanyue.tech/images/23-03-27/hello.1f5aef.webp" width="300">
