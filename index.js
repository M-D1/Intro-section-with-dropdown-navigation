const featuresCon = document.querySelector('.features')
const featuresNav = document.querySelector('.features-items')

const companyNavCon = document.querySelector('.company')
const companyInfo = document.querySelector('.company-info')
const arrowImgFeatures = document.querySelector('.arrowImg-features')
const arrowImgCompany = document.querySelector('.arrowImg-company')

const menuBar = document.querySelector('.menu-bar')
const navBar = document.querySelector('.navbar')

menuBar.addEventListener('click',() => {
   menuBar.classList.toggle('active') 
   
   navBar.classList.toggle('active')

   if(navBar.classList.contains('active')){
      menuBar.style.position = 'fixed'
      navBar.style.right = '0%'
      menuBar.style.right = '7px'

   }
   else{
      navBar.style.right = '-122%'
      menuBar.style.position ='absolute'
      menuBar.style.right = '-7px'
   }
})


const arrowUp ='images/icon-arrow-up.svg'
const arrowDown= 'images/icon-arrow-down.svg'

function handleClick(navElement,img){

 
 navElement.classList.toggle('active')

 if(navElement.classList.contains('active')){
   img.src =arrowUp

   if(navElement === featuresNav){
     companyInfo.classList.remove('active')
     arrowImgCompany.src=arrowDown
  }else{
     featuresNav.classList.remove('active')
     arrowImgFeatures.src=arrowDown
  }
 }


 else{
  img.src = arrowDown
 }

}

featuresCon.addEventListener('click',function(){
 handleClick(featuresNav,arrowImgFeatures)
})

companyNavCon.addEventListener('click',function(){
 handleClick(companyInfo,arrowImgCompany)
})





