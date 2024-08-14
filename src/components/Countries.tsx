import Argentina from './../assets/contries/argentina.png';
import Egypt from './../assets/contries/egypt.png';
import England from './../assets/contries/england.png';
import France from './../assets/contries/france.png';
import Germany from './../assets/contries/germany.png';
import Ghana from './../assets/contries/ghana.png';
import Mexico from './../assets/contries/mexico.png';
import Nigeria from './../assets/contries/nigeria.png';
import Russia from './../assets/contries/russia.png';
import SAfrica from './../assets/contries/south-africa.png';
import Spain from './../assets/contries/spain.png';

export default function Countries() {
    return (
        <div className='my-7 xl:my-10 flex flex-wrap lg:gap-x-12 md:gap-x-8 gap-y-2 max-w-[80vw] gap-x-4 items-center justify-center'>
            {
                CountriesFlag.map((item, idx) => (
                    <img src={item.icon} alt={item.alt} key={idx} className='h-8 md:h-10 lg:h-12 w-auto' />
                ))
            }
        </div>
    )
}




export const CountriesFlag = [
    {
        icon: England,
        alt: 'England'
    },
    {
        icon: Spain,
        alt: 'Spain'
    },
    {
        icon: Russia,
        alt: 'Russia'
    },
    {
        icon: SAfrica,
        alt: 'South-Africa'
    },
    {
        icon: Ghana,
        alt: 'Ghana'
    },
    {
        icon: Nigeria,
        alt: 'Nigeria'
    },
    {
        icon: France,
        alt: 'France'
    },
    {
        icon: Argentina,
        alt: 'Argentina'
    },
    {
        icon: Egypt,
        alt: 'Egypt'
    },
    {
        icon: Mexico,
        alt: 'Mexico'
    },
    {
        icon: Germany,
        alt: 'Germany'
    }
]