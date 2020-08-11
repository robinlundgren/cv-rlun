import home from '../../../Assets/icons/mobileNav/home.svg'
import comp from '../../../Assets/icons/else.svg'
import expe from '../../../Assets/icons/work.svg'
import educ from '../../../Assets/icons/education.svg'

export const CreateMenuState = () => ({
    fields: {
        menuInformation: {
            name: 'Robin Lundgren',
            title: 'Frontendutvecklare',
            nav: 'navigation',
            kon: 'kontakt',
            navs: [
                {
                    key: 'sta',
                    title: 'Start',
                    active: true,
                    reload: null,
                    img: home,
                    css: 'menu__nav__section__inner__arc',
                },
                {
                    key: 'com',
                    title: 'Kompetens',
                    active: false,
                    reload: null,
                    img: comp,
                    css: 'menu__nav__section__inner__arc--inactive',
                },
                {
                    key: 'exp',
                    title: 'Erfarenhet',
                    active: false,
                    reload: null,
                    img: expe,
                    css: 'menu__nav__section__inner__arc--inactive',
                },
                {
                    key: 'edu',
                    title: 'Utbildning',
                    active: false,
                    reload: null,
                    img: educ,
                    css: 'menu__nav__section__inner__arc--inactive',
                },
            ]
        }
    }
})

export default CreateMenuState