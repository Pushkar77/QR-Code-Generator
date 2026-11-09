const qrText = document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generatebtn=document.getElementById('Generatebtn');
const downloadbtn=document.getElementById('Downloadbtn');

const qrContainer= document.querySelector('.qr-body');

let size=sizes.value;
generatebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();
})

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();
})

downloadbtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img');
    if(img !==null){
        let imgattr=img.getAttribute('src');
        downloadbtn.setAttribute("href",imgattr);
    }
    else{
        downloadbtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
})

function isEmptyInput(){
    if(qrText.value.length>0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URL to generate your QR code");
    }
}

function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000"
    });
}