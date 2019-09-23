/*
    <input type="number" pattern="[0-9]*"/>
    掉起文字键盘
*/
var reader = new FileReader();
reader.readAsDataURL(this.file[i]);
reader.onload = function () {
    console.log(this.result);
    // this.result 是base64 的格式
};
