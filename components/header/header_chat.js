import Css_headerApp from '../../components/header/header.module.scss';

import Link from 'next/link'
import Image from 'next/image'

export default function Header_chat({data}){
    return (
        <>
            <header className={`${Css_headerApp.header}`}>
                <Link href={'/'}>
                    <a className={`${Css_headerApp.header__handler}`}>
                        <span className={`fas fa-arrow-left`}></span>
                    </a>
                </Link>
                <div className={`${Css_headerApp.header__container}`}>
                    <Link href={'users/profile'}>
                        {data.container.avatar.status ? (
                            <Image
                                src={data.container.avatar.src}
                                alt={data.container.title}
                                width={data.container.avatar.width}
                                height={data.container.avatar.height}
                                className={`${Css_headerApp.header__image}`}
                            />
                        ) : (" ")}
                    </Link>
                    
                    <div className={`${Css_headerApp.header__container}`}>
                        <h3 className={`${Css_headerApp.header__title}`}>{data.container.title}</h3>

                        {data.container.description.status ? (
                            <span className={`${Css_headerApp.header__description}`}>{data.container.description.text}</span>
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
                </div>
            </header>
        </>
    )
}