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
