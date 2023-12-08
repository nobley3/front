let slides = document.querySelector('.newsList');
let slide = document.querySelectorAll('.newsList li');
let currentidx = 0;
let slidecount = slide.length;
let btnPre = document.querySelector('.btnPre');
let btnNex = document.querySelector('.btnNex');
let playBtn = document.querySelector('.footerPlaybtn');
let stopBtn = document.querySelector('.footerStopbtn');
let timer=undefined; 

makeClone();

// 무한슬라이드

function makeClone(){
    for (let i =0; i<slidecount; i++){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    };

    for(let i = slidecount -1; i>=0; i--){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    };

}

btnNex.addEventListener('click',function(){
    moveSlide(currentidx+1);
});

btnPre.addEventListener('click',function(){
    moveSlide(currentidx-1);
});

function moveSlide(n){
    currentidx = n;

    if(currentidx>slidecount*2-1){
        currentidx = 0;
    }
    if (currentidx < 0) {
        currentidx = slidecount * 2 - 1;
    }
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = 'translateY(' + (-currentidx * 65) + 'px)';
}



function stopSlide(){
    clearInterval(timer);
    slides.style.transition = '';
   
}

function autoSlide(){
    if(timer==undefined){
        timer=setInterval(function(){
            moveSlide(currentidx + 1);
        },3000);
    }
}

// 재생 버튼 클릭 시
playBtn.addEventListener('click', function () {
    console.log("auto button clicked");
    autoSlide();
    playBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
});

// 정지 버튼 클릭 시

stopBtn.addEventListener('click', function () {
    console.log("Stop button clicked");
    stopSlide();
    stopBtn.style.display = 'none';
    playBtn.style.display = 'inline-block';
    moveSlide(currentidx);
});
// 페이지 로드 후 자동 슬라이딩 시작
autoSlide();