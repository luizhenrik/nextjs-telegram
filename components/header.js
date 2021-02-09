import Css_headerApp from '../components/header.module.scss';

import Link from 'next/link'
import Image from 'next/image'

export default function Header({children, database}) {
    return (
        <>
            <header className={`${Css_headerApp.header}`}>
                {database.mode == "search" ? (
                    <Link href={''}>
                        <a className={`${Css_headerApp.header__handler}`}>
                            <span className={`fas fa-bars`}></span>
                        </a>
                    </Link>
                ) : (
                    <Link href={'/'}>
                        <a className={`${Css_headerApp.header__handler}`}>
                            <span className={`fas fa-arrow-left`}></span>
                        </a>
                    </Link>
                )}
                <div className={`${Css_headerApp.header__container}`}>
                    {database.mode == "search" ? (
                        <input className={`${Css_headerApp.header__field}`} placeholder={'Buscar'}></input>
                    ):(
                        <>
                            <Link href={'users/profile'}>
                                {database.container.avatar.status ? (
                                    <Image
                                        src={database.container.avatar.src}
                                        alt={database.container.title}
                                        width={database.container.avatar.width}
                                        height={database.container.avatar.height}
                                        className={`${Css_headerApp.header__image}`}
                                    />
                                ) : (" ")}
                            </Link>
                            
                            <div className={`${Css_headerApp.header__container}`}>
                                <h3 className={`${Css_headerApp.header__title}`}>{database.container.title}</h3>

                                {database.container.description.status ? (
                                    <span className={`${Css_headerApp.header__description}`}>{database.container.description.text}</span>
                                ) : (" ")}
                            </div>

                            <a className={`${Css_headerApp.header__handler}`}>
                                <span className={`fas fa-search`}></span>
                            </a>
                            
                            <a className={`${Css_headerApp.header__handler}`}>
                                <span className={`fas fa-phone-alt`}></span>
                            </a>
                            
                            <a className={`${Css_headerApp.header__handler}`}>
                                <span className={`fas fa-ellipsis-v`}></span>
                            </a>
                        </>
                    )}
                </div>
            </header>
        </>
    )
}