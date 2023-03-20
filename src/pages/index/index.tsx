import { Button, Textarea, View } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import "./index.less";

const Index = () => {
  const [inputValue, setInputValue] = useState<string>(
    `${process.env.INIT_INPUT}`
  );
  const [gptValue, setGptValue] = useState<string>();
  const [showLoading, setShowLading] = useState<boolean>(false);

  const handleValueChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const getGptVal = () => {
    setShowLading(true);
    wx.request({
      url: `${process.env.OPEN_API_BASE_URL}/v1/chat/completions`, // 后端接口地址
      method: "POST", // 请求方法
      header: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.OPEN_API_KEY}`,
      },
      data: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `${process.env.CHAT_PROMPT} ${inputValue}`,
          },
        ],
      },
      success: function (res: any) {
        // 请求成功回调
        const curValue = res.data?.choices[0].message.content || "";
        setGptValue(curValue);
        setShowLading(false);
      },
      fail: function (error) {
        // 请求失败回调
        wx.showToast({
          title: "抱歉,我脑子有点不好。请你再问一遍",
          icon: "none",
          duration: 2000,
        });
        setShowLading(false);
      },
    });
  };

  useEffect(() => {
    setGptValue("");
  }, []);

  return (
    <View className="page-contain">
      <view className="page-title">{process.env.SUBTITLE}</view>
      <Textarea
        className="page-input"
        autoFocus
        value={inputValue}
        onInput={handleValueChange}
      />
      <Button className="page-btn" onClick={getGptVal}>
        {showLoading ? "组织语言中..." : "come on"}
      </Button>
      {gptValue && <view className="page-answer">{gptValue}</view>}
    </View>
  );
};
export default Index;
