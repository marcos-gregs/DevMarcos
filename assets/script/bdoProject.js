// Lista de Projetos
const project = [
        {
        name:'Sunnyside',
        tag:'front-end sass',
        image:'sunny',
        link:'https://sunnyside-lilac.vercel.app/'
        },
        {
        name:'Ide photo',
        tag:'front-end',
        image:'ide',
        link:'https://ide-photos-zeta.vercel.app/'
        },
        {
        name:'PortofóliWeb',
        tag:'front-end sass',
        image:'potWev',
        link:'https://portfolio-website-main-nu.vercel.app/'
        },{
        name:'Curriculo Web',
        tag:'front-end bulma',
        image:'cvWeb',
        link:'https://cv-bulma-rbvk.vercel.app/'
        },
        {
        name:'oneBitX',
        tag:'front-end Bootstrap',
        image:'onebit',
        link:'https://one-bit-x-j1idytsou-trona-vidro.vercel.app/'
        },
        {
        name:'news-homepage-main',
        tag:'front-end',
        image:'blog',
        link:'https://news-homepage-main-omega.vercel.app/'
        }
]
// LinkContain

const projectSection = document.querySelector('.filterSection')

project.forEach(element =>{
        const card = document.createElement('div')
        card.className='cardFilter'
        card.innerHTML=`<div class="${element.image}">
        </div>
        <div class="cardText">
          <a href="${element.link}" target="_blank" class="titleImg"><h1>${element.name}</h1></a>
          <p class="${element.tag}">#${element.tag}</p>
        </div>`
        projectSection.append(card)
        
})