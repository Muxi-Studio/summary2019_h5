import React from 'react';
import './App.css';
import './file/bank.png';
import './file/myfont.ttf';
import './text.js';

function App() {
  return (
    <div className="backperson">
    <div className = "backperson_text1">
        <span className = "backperson_style1">个人年度榜</span>
    </div>
    <div className = "backperson_text2">
        <span className = "backperson_style2">总共消费金额：￥</span>
        <span className = "backperson_style2">999999</span>
    </div>
    <div className = "backperson_text3">
        <span className = "backperson_style3">最早的消费：</span>
    </div>
    <div className = "backperson_text4">
        <span className = "backperson_style2">10月10日 东一食堂 xx窗口</span>
    </div>
    <div className = "backperson_text3">
        <span className = "backperson_style3">最晚的消费：</span>
    </div>
    <div className = "backperson_text4">
        <span className = "backperson_style2">10月10日 东一食堂 xx窗口</span>
    </div>
    <div className = "backperson_text5">
        <span className = "backperson_style2">年度食堂：</span>
        <span className = "backperson_style2">xx食堂</span>
    </div>
</div>
  );
}

export default App;
