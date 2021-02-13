import Link from "next/link"
import Image from "next/image"
import style from "../../../components/resume-user/styles/resume-user.module.scss"

export default function ResumeUser() {
    return (
        <>
            <div className={style['resume-user']}>
                <Link href={"/chat"}>
                    <a className={style['resume-user__content']}>
                        <Image
                        src={'https://xirrim.com/images/user.png'}
                        alt={'nickname'}
                        layout={'intrinsic'}
                        width={'52'}
                        height={'52'}
                        className={style['resume-user__avatar']}></Image>

                        <div className={style['resume-user__container']}>
                            <span className={style['resume-user__nickname']}>Lorem Ipsum</span>
                            <span className={style['resume-user__text']}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                        </div>
                    </a>
                </Link>

                <a className={`${style['resume-user__handler']}`}>
                    <span className={`fas fa-ellipsis-v`}></span>
                </a>
            </div>
        </>
    )
}