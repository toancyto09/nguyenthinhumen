// //hieu ung anh header
// const contaihnerHead = document.querySelector(".header-container");
// const imghnerHead = document.querySelector(".header-img");
// contaihnerHead.addEventListener('mousemove', (e)=>{
//   const x = e.pageX - contaihnerHead.offsetLeft;
//   const y = e.pageY - contaihnerHead.offsetTop;
//   const centerX = contaihnerHead.offsetWidth / 2;
//   const centerY = contaihnerHead.offsetHeight / 2;
//   const offsetX = (x - centerX) / 10;
//   const offsetY = (y - centerY) / 10;
//   imghnerHead.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
// })

// contaihnerHead.addEventListener('mouseleave', () => {
//   imghnerHead.style.transform = 'translate(0, 0)';
// });
//view text intro
const textInforElement = document.querySelector('.section-info-des p');
const textInfor = textInforElement.textContent;
let indexText = 0;

function showTextInfor(){
  if(indexText < textInfor.length){
    const currentTextInfor = textInfor.slice(0, ++indexText);
    textInforElement.textContent = currentTextInfor;
  }else {
    clearInterval(timer);
  }
}
const timer = setInterval(showTextInfor, 50);
//Birday section
const active_heart = document.querySelectorAll('.active-bir-click');
  active_heart.forEach(function(heart) {
    heart.addEventListener('click', function() {
      heart.classList.toggle('active-bir-click-js');
    });
  });

//Hue side
var listImgHueside = [
  "./img/Huế.jpg",
  // "../img/huế2.jpg",
  "./img/huế3.jpg",
  "./img/huế4.jpg"
];

var imgHue = document.querySelector(".imgHueSide");

var currentImgHue = 0;

var interval = 5000;

function changeImage() {
  // Thay đổi đường dẫn ảnh của thẻ img bằng đường dẫn ảnh tiếp theo trong mảng
  imgHue.setAttribute("src", listImgHueside[currentImgHue]);

  // Tăng biến đếm ảnh đang hiển thị
  currentImgHue++;

  // Nếu biến đếm ảnh đang hiển thị lớn hơn hoặc bằng tổng số ảnh trong mảng,
  // reset biến đếm về 0 để quay lại ảnh đầu tiên trong mảng
  if (currentImgHue >= listImgHueside.length) {
    currentImgHue = 0;
  }
}
setInterval(changeImage, interval);

//hoi an active
const clickImgHoiAn = document.querySelectorAll('.travel-HoiAn-overlay');
clickImgHoiAn.forEach(function(imgHA) {
  imgHA.addEventListener('click', function() {
    imgHA.classList.toggle('active');
  });
});

//DaLat 
var imgsDaLat = document.querySelectorAll('.section-travel-Dl-img');
imgsDaLat.forEach(function(imgs){
  imgs.addEventListener('click', function(){
    this.classList.toggle('flip');
  });
});

//gop yt
const btn = document.querySelector('.footer-feedback-btn');
const dialog = document.getElementById('dialog');
const closeBtn = document.getElementById('close-btn');
const sentbtn = document.querySelector('#sent-btn')

btn.addEventListener('click', function() {
  dialog.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  dialog.style.display = 'none';
});

sentbtn.addEventListener('click', function() {
  dialog.style.display = 'none';
});

function showNoticeSent() {
  alert("Đã gửi thành công, Thank you^^");
}




