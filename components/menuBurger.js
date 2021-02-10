import Css_menuBurger from '../components/menuBurger.module.scss';

function menuBurger({open_menuBurger}) {
    console.log(open_menuBurger);
    return (
        <>
            <div className={`${Css_menuBurger.menuBurger}`} data-open={open_menuBurger}>
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

export default menuBurger;