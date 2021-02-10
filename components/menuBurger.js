import Css_menuBurger from '../components/menuBurger.module.scss';

function menuBurger({data}) {
console.log(data);
    return (
        <>
            <div className={`${Css_menuBurger.menuBurger}`}>
                <div className={`${Css_menuBurger.menuBurger__overlay}`}></div>
                <div className={`${Css_menuBurger.menuBurger__content}`}>
                    <div className={`${Css_menuBurger.menuBurger__header}`}></div>
                    <div className={`${Css_menuBurger.menuBurger__main}`}></div>
                    <div className={`${Css_menuBurger.menuBurger__footer}`}></div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://xirrim.com/api/basic')
    const data = await res.json()

    console.log('r', data);

    return {
        props: {
            data
        },
    }
}

export default menuBurger;