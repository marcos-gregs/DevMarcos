const btnNav = document.querySelector('.navBtn')


btnNav.addEventListener('click',()=>{
    const navList = document.querySelector('#navlist')
    navList.classList.toggle('showNav')

})