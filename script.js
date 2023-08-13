const container = document.getElementById('review-container');
         let a=0;
        function slideShow(){
            if(a<=1){
                container.style.scrollBehavior='smooth';
            container.scrollLeft+=container.offsetWidth;
            a++;
            }
            else{
                container.style.scrollBehavior='smooth';
            container.scrollLeft-=container.offsetWidth;
            a++;
            }
            if(a===4){
            a=0;
            } 
        }    
        setInterval(() => {
            slideShow();
        }, 2000);



       const navLinks = document.querySelector('.nav-links');
       const xMark = document.getElementById('xmark');
       const bars = document.getElementById('bars');
        function showNav(){
            navLinks.style.right='0'
        }
        function hideNav(){
            navLinks.style.right='-200px'
        }