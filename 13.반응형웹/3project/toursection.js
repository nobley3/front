function moveToSlide(slideNumber) {
    let slideWidth = document.querySelector('.textList li').clientWidth; // 각 슬라이드의 너비를 계산
    let slideAmount = -(slideWidth * slideNumber); // 이동해야 할 양을 계산
    document.querySelector('.textList').style.transform = `translateX(${slideAmount}px)`; // 슬라이드 이동
    updatePagingNumbers(slideNumber + 1); // 페이징 번호 업데이트
  }

  // 슬라이드 넘버 초기화
  let currentSlide = 0;

  // 자동으로 슬라이드를 움직이는 함수
  function autoSlide() {
    let totalSlides = document.querySelectorAll('.textList li').length; // 전체 슬라이드 수
    currentSlide = (currentSlide + 1) % totalSlides; // 다음 슬라이드 번호 계산 (무한 반복을 위해 modulo 사용)
    moveToSlide(currentSlide); // 슬라이드 이동 함수 호출
  }

  // 일정 시간마다 슬라이드를 움직임
  setInterval(autoSlide, 3000); // 3초마다 자동 슬라이드

  // 페이징 번호 업데이트 함수
  function updatePagingNumbers(current) {
    document.querySelector('.firstNum').textContent = String(current).padStart(2, '0');
  }

  // 이미지

  // 이미지 슬라이드로 이동하는 함수
  function moveImageSlide(slideIndex) {
    let imageWidth = document.querySelector('.imgsmallBox').clientWidth; // 컨테이너의 너비를 계산
    let translateDistance = -(imageWidth * slideIndex); // 이동해야 할 거리 계산
    document.querySelector('.imgList').style.transform = `translateX(${translateDistance}px)`; // 슬라이드 이동
    updateImagePagingNumbers(slideIndex + 1); // 페이징 번호 업데이트
  }

  // 현재 이미지 슬라이드 위치를 나타내는 변수
  let currentImageSlide = 0;

  // 이미지 슬라이드를 자동으로 이동시키는 함수
  function autoImageSlide() {
    let totalImageSlides = document.querySelectorAll('.imgSlide').length; // 전체 슬라이드 수
    currentImageSlide = (currentImageSlide + 1) % totalImageSlides; // 다음 슬라이드 번호 계산
    moveImageSlide(currentImageSlide); // 슬라이드 이동 함수 호출
  }

  // 일정 시간마다 이미지 슬라이드를 움직임
  setInterval(autoImageSlide, 3000); // 3초마다 자동 슬라이드

  // 이미지 페이징 번호 업데이트 함수
  function updateImagePagingNumbers(current) {
    document.querySelector('.firstNum').textContent = String(current).padStart(2, '0');
  }

// 좋아요버튼

document.addEventListener("DOMContentLoaded",function(){
            let likebtn = document.querySelectorAll(".likebtn");
             likebtn.forEach(function(button,index){
                button.addEventListener("click",function(){
                    button.classList.toggle("on");
                });
             });
        });
        // ai톡톡
        const photoItems = document.querySelectorAll('.hotPoto ul li');

        photoItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.classList.add('on');
            });

            item.addEventListener('mouseout', () => {
                item.classList.remove('on');
            });
        });
