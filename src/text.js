import html2canvas from "html2canvas";

// 将`body`节点截取变为canvas
html2canvas(document.querySelector("body"), {
    dpi: window.devicePixelRatio * 2, // 对应屏幕的dpi，适配高清屏，解决canvas模糊问题
    scale: 2, // 缩放
    useCORS: true
    // y: window.scrollY // 根据滚动条来截取--主要用于截取某一个区域
}).then(canvas =>{
    document.body.appendChild(canvas);
        // canvas参数为生成的canvas的dom节点，可以对其进行dom操作
        // let dataUrl = canvas.toDataURL("image/png", 1.0),
        // newImg = document.createElement("img");
        // newImg.setAttribute("crossOrigin",'anonymous');
        // newImg.src = dataUrl+"?timeStamp="+new Date();
        // document.body.appendChild(newImg);
        // newImg.style.width = '100%';
        // console.log(newImg);
});