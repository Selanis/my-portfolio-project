import { FunctionComponent } from "react";
import styles from "./footer.module.css";


export const Footer: FunctionComponent = () => {

    return (
        <>
        <footer className={styles.footer} id="contacts">
            <div className={styles.footer__container}>
                <div>
                <h2 className={styles.footer__text}>Вы можете связаться со мной:</h2>
                <a className={styles.footer__link} href="https://disk.yandex.ru/d/RtlCU72hpUDfvA" target="_blank">или посмотреть резюме</a>
                </div>
                

                <ul className={styles.footer__list}>
                    <li>
                        <a href="https://t.me/katrin_polekhova" target="_blank">
                            <img src="./images/icons/telegram.svg" alt="telegram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://vk.com/katuha_skoro_budet" target="_blank">
                            <img src="./images/icons/vk.svg" alt="vk" />
                        </a>
                    </li>
                </ul>
            </div>

            


        </footer>
        <div className={styles.underFooter}>
            <p>Сайт разработан при помощи React Полеховой Екатериной в 2024 году</p>
        </div>
        </>
    )
}