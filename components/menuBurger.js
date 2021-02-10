import Css_menuBurger from '../components/menuBurger.module.scss';

export default function menuBurger() {

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
    const posts = await res.json()

    return {
        props: {
            menuBurger_isOpen: false
        }, // will be passed to the page component as props
    }
}
