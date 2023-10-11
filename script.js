const profiles = document.querySelectorAll('.profiles>div');
const profileBody = document.querySelector('.profiles');
const shadow = document.querySelector('#shadow');
const body = document.body;
const right = document.querySelector('#right');
const left = document.querySelector('#left');
const icon = document.querySelector('nav > div:nth-child(1)');

// still figuring out how to make the first #shadow ('radial background') transition start from the center

        profiles.forEach((profile) => {
            profile.addEventListener('mouseenter', () => {
                shadow.style.transform = `translate(0, 0)`;
                const offsetX = profile.getBoundingClientRect().left + profile.clientWidth / 2;
                const offsetY = profile.getBoundingClientRect().top + profile.clientHeight / 2;
                // shadow.style.transitionDuration = '3s';
                // shadow.style.background = `radial-gradient(circle at ${offsetX}px ${offsetY}px, blue 200px, black 500px)`;
                const translateX = offsetX - shadow.offsetWidth / 2;
                const translateY = offsetY - shadow.offsetHeight / 2;

                // Apply the transform property with transitions
                shadow.style.transform = `translate(${translateX}px, ${translateY}px)`;
                
                
            });

            profile.addEventListener('mouseleave', () => {
                //////// translate Y axis have to corelated to CSS: #shadow Y positioning
                if (window.innerHeight > 801){
                    shadow.style.transform = `translate(-25%, -160px)`;
                }else if (window.innerHeight <=801 && window.innerHeight > 751){
                    shadow.style.transform = `translate(-25%, -180px)`;
                } else if (window.innerHeight < 751 && window.innerHeight >= 699){
                    shadow.style.transform = `translate(-25%, -200px)`;
                }
                else if (window.innerHeight >= 629){
                    shadow.style.transform = `translate(-25%, -260px)`;
                }
                else{
                    shadow.style.transform = `translate(-25%, -290px)`;
                }
                //shadow.style.background = `radial-gradient(circle at 35% 410px, rgb(0, 0, 122) 0px, black 800px), no-repeat`;
            });
        });

        profiles[0].addEventListener('mouseenter',()=>{
            shadow.style.background = `radial-gradient(circle, rgb(0, 25, 243) 10%, black 45%)`;
            body.style.background = 'rgb(0, 10, 200)';
        });

        profiles[0].addEventListener('mouseleave',()=>{
            shadow.style.background = `radial-gradient(circle, rgb(0, 0, 122) 10%, black 45%)`;
        })

        profiles[1].addEventListener('mouseenter',()=>{
            shadow.style.background = `radial-gradient(circle, rgb(2, 75, 47) 10%, black 45%)`;
        });

        profiles[1].addEventListener('mouseleave',()=>{
            shadow.style.background = `radial-gradient(circle, rgb(0, 0, 122) 10%, black 45%)`;
        })

        profiles[2].addEventListener('mouseenter',()=>{
            shadow.style.background = `radial-gradient(circle, rgb(15, 0, 122) 10%, black 45%)`;
            body.style.background = 'rgb(8, 0, 92)';
        });

        profiles[2].addEventListener('mouseleave',()=>{
            shadow.style.background = `radial-gradient(circle, rgb(0, 0, 122) 10%, black 45%)`;
        });



function showRight(){
    right.classList.remove('visible');
     left.classList.add('visible');
//    profileBody.style.marginLeft = "-50%";
profileBody.classList.add('hidden');
}

function showDefault(){
    right.classList.add('visible');
    left.classList.remove('visible');
    // profileBody.style.marginLeft = "0px";
    profileBody.classList.remove('hidden');
}

right.addEventListener('click',showRight);
left.addEventListener('click',showDefault);

function checkScreenWidth() {
    if (window.innerWidth > 660) {
        profileBody.style.transition = 'transform 0s';
      showDefault();
    } else{
        profileBody.style.transition = '';
    }
  }
  
  
  window.addEventListener('resize', checkScreenWidth);
  
  
  checkScreenWidth();

// icon.addEventListener('click',()=>{
//     console.log('hello');
//     showDefault();
// });






