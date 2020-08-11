import mail from '../../../Assets/icons/contact/mail.svg'
import phone from '../../../Assets/icons/contact/phone.svg'
import pinpoint from '../../../Assets/icons/contact/pinpoint.svg'
import license from '../../../Assets/icons/contact/license.svg'
import language from '../../../Assets/icons/contact/language.svg'
import age from '../../../Assets/icons/contact/grow.svg'

export const CreateStartState = () => ({
    fields: {
        startInformation: {
            intro: 'Jag skapar och bygger webbaserade gränssnitt utefter krav, anspråk och givetvis slutanvändarens medvetna eller undermedvetna behov av enkelhet och tillgänglighet i den digitala tillvaron. Med hjälp av den senaste tekniken, naturligtvis.',
            contact: [
                {
                    key: 'mail',
                    title: 'mejl',
                    img: mail,
                    value: 'robinlundgrenska@gmail.com',
                    bg: 'start__middle-section__square--one'
                },
                {
                    key: 'phone',
                    title: 'telefon',
                    img: phone,
                    value: '0760 - 38 93 27',
                    bg: 'start__middle-section__square--two'
                },
                {
                    key: 'address',
                    title: 'adress',
                    img: pinpoint,
                    value: 'Storgatan 55, Herrljunga',
                    bg: 'start__middle-section__square--three'
                },
                {
                    key: 'lang',
                    title: 'språk',
                    img: language,
                    value: 'Svenska & Engelska',
                    bg: 'start__middle-section__square--five'
                },
                {
                    key: 'license',
                    title: 'körkort',
                    img: license,
                    value: 'B, AM, Truck',
                    bg: 'start__middle-section__square--four'
                },
                {
                    key: 'age',
                    title: 'Ålder',
                    img: age,
                    value: '26',
                    bg: 'start__middle-section__square--six'
                },
            ],
        }
    }
})

export default CreateStartState