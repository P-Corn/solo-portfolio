const skillItems = document.querySelectorAll('.skills__col');
const skillSliders = document.querySelectorAll('.skills__col__slider');

skillItems.forEach((skill, index) => {
    skill.addEventListener('mouseover', () => {
        skillSliders[index].style.top = '0';
    })

    skill.addEventListener('mouseout', () => {
        skillSliders[index].style.top = '100%';
    })
})
