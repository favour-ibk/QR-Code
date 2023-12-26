let qrcodeTextbox=document.getElementById('qrcodeTextbox');
let qrcodeImgbox=document.getElementById('qrcodeImgbox');
let qrcodeImg=document.getElementById('qrcodeImg');

function generateCode(){
    if(qrcodeTextbox.value.length > 0){
        qrcodeImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrcodeTextbox.value;
        qrcodeImg.style.visibility="visible";
        qrcodeImgbox.classList.add('viewqrcodeImgbox');
    }else{
        alert('To generate a QRCode, you must enter a value');
    }
}

function resetCode(){
    qrcodeTextbox.value="";
    qrcodeTextbox.focus=true;
    qrcodeImgbox.classList.remove('viewqrcodeImgbox');

}
