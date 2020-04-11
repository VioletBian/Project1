var myimg = document.getElementById('myimg');
var file = document.getElementById('file');
var form = document.getElementById('upload-info');
var footer = document.getElementById('footer');
var btnUpload = document.getElementById('btn-upload');
file.onchange = function () {
    var url;
    var agent = navigator.userAgent;   //检测浏览器版本
    if (agent.indexOf("MSIE") >= 1) {
        url = file.value;
    } else if (agent.indexOf("Firefox") > 0) {
        url = window.URL.createObjectURL(file.files.item(0));
    } else if (agent.indexOf("Chrome") > 0) {
        url = window.URL.createObjectURL(file.files.item(0));
    }
    myimg.src = url
    myimg.style.display = "block";
    form.style.display = "block";
    footer.style.positon = "";
    footer.style.bottom = "";
    footer.style.marginTop = "5%";

}
window.onload = function () {
    var bodyHeight = $(document.body).height();//获取文档的的高度
    this.console.log(bodyHeight);
    var windowHeight = $(window).height();     //获取窗口的的高度
    this.console.log(windowHeight);

    var footer = document.getElementById('footer');

    //文档高度小于窗口高度时，给footer绝对定位。position:absolute;bottom:0;

    if (windowHeight > bodyHeight) {
        footer.style.position = "absolute";
        footer.style.bottom = "0"
    } else {
        footer.style.positon = "";
        footer.style.bottom = "";
    }
}
btnUpload.onclick = function send() {
    // var name = $("#name").val();
    // if (name = '') {
    //     alert("Your photo has been submitted.")
    //     return;
    // }
    alert("Your photo has been submitted.")
    console.log("We have already reached here");
    window.location.href = "my_photos.html";
}