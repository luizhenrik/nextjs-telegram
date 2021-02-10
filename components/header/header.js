import Css_header from '../../components/header/header.module.scss';

import Link from 'next/link'

export default function Header({children, database}) {
    return (
        <>
            <header className={`${Css_header.header}`}>
                    <Link href={''}>
                        <a className={`${Css_header.header__handler}`}>
                            <span className={`fas fa-bars`}></span>
                        </a>
                    </Link>
                    <div className={`${Css_header.header__container}`}>
                        <div className={`${Css_header.header__container}`}>
                            <h3 className={`${Css_header.header__title}`}>{`Xirrim`}</h3>
                        </div>

                        <a className={`${Css_header.header__handler}`}>
                            <span className={`fas fa-search`}></span>
                        </a>
                </div>
            </header>
        </>
    )
}