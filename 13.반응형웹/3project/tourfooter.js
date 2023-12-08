 // 푸터
 let newsList = document.getElementById('newsList');
 let listItems = newsList.getElementsByTagName('li');
 let Index = 0;
 let translateY = 0;
 let itemHeight = listItems[0].offsetHeight;


 function TextLimit(text, maxLength) {
     if (text.length > maxLength) {
         return text.slice(0, maxLength) + '...';
     }
     return text;
 }

 function shownewsList() {
     translateY -= itemHeight;
     newsList.style.transition = 'transform 1s';
     newsList.style.transform = `translateY(${translateY}px)`;

     Index = (Index + 1) % listItems.length;

     for (let i = 0; i < listItems.length; i++) {
         listItems[i].style.display = 'block';
         let textL = listItems[i].textContent;
         listItems[i].textContent = TextLimit(textL, 80);
     }

     if (Index === listItems.length - 1) {
         setTimeout(() => {
             newsList.style.transition = 'none';
             translateY = 0;
             newsList.style.transform = `translateY(${translateY}px)`;
             for (let i = 0; i < listItems.length; i++) {
                 listItems[i].style.display = 'block';
                 let textL = listItems[i].textContent;
                 listItems[i].textContent = TextLimit(textL, 60);
             }
         }, 2000);
         Index = 0;
     } else {
         Index++;
     }
 }
 function startnewsList() {

     // listItems[Index].style.display='block';
     setInterval(shownewsList, 2000);
 }
 window.addEventListener('load', startnewsList);