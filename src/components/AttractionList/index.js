import './style.css';
import TextListAttraction from '../TextListAttraction';

const AttractionList = () => {

    const dayOne = ['System of Dom', 'Python Maiden', 'Apollo Client 2001', 'Bon Java', 'NickCallback', 'Linkin Promises', 'Fullstack Fighters', 'Papa React', 'Angular in Chains', 'Agnostic Front-End', 'SlipkNode', 'Pink Flutter', 'Kiss'];
    const dayTwo = ['Lana Del Ploy', 'Dua Lib', 'The Backnd', 'CSS Styles', 'ArrayAna Grande', 'DJ Query', 'Miley Cypress', 'The Bootstrap Boys', 'Json Derulo', 'CloudPlay', 'dev Lovato', 'Kylie MiLOG', 'Jenkins Brothers', 'RubyCat Dolls'];
    const a = [];

    const dayOneBigger = ['System of Dom']
    const dayOneMedium = ['Python Maiden', 'Apollo Client 2001', 'Bon Java', 'NickCallback',]
    const dayOneSmall = ['Linkin Promises', 'Fullstack Fighters', 'Papa React', 'Angular in Chains',]
    const dayOneSmallNormal = ['Agnostic Front-End', 'SlipkNode', 'Pink Flutter', 'Kiss']

    const dayTwoBigger = ['Lana Del Ploy']
    const dayTwoMedium = ['Dua Lib', 'The Backnd', 'CSS Styles', 'ArrayAna Grande']
    const dayTwoSmall = ['DJ Query', 'Miley Cypress', 'The Bootstrap Boys', 'Json Derulo']
    const dayTwoSmallNormal = ['CloudPlay', 'dev Lovato', 'Kylie MiLOG', 'Jenkins Brothers', 'RubyCat Dolls']

    // for (let i = 0; i < dayOne.length; i += 4) {
    //     a.push(dayOne.slice(i, i + 4))
    // }

    // console.log(a)

    return (
        <ul className='attraction-list'>
            <li>
                <TextListAttraction text={dayOneBigger[0]} textSize={'48px'} fontW={800} />
            </li>
            {
                dayOneMedium.map(item => <li key={item}><TextListAttraction text={item} textSize={'40px'} fontW={700} /></li>)
            }
            {
                dayOneSmall.map(item => <li key={item}><TextListAttraction text={item} textSize={'32px'} fontW={700} /></li>)
            }
            {
                dayOneSmallNormal.map(item => <li key={item}><TextListAttraction text={item} textSize={'32px'} /></li>)
            }

        </ul>
    )
}

export default AttractionList;