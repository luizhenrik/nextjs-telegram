import Css_header from '../../components/header/header.module.scss'

import Link from 'next/link'

export default function Header_search() {
    return (
        <>
            <header className={`${Css_header.header}`}>
                <Link href={''}>
                    <a className={`${Css_header.header__handler}`}>
                        <i className={`fas fa-bars`}></i>
                    </a>
                </Link>
                <div className={`${Css_header.header__container}`}>
                    <input className={`${Css_header.header__field}`} placeholder={'Buscar'}></input>
                </div>
            </header>
        </>
    )
}