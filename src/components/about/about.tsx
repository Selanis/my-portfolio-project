import { FunctionComponent } from "react";
import styles from "./about.module.css";
import { Title } from "../title/title";
import avatar from "./about__avatar.png";

export const About: FunctionComponent = () => {


    return (
        <section className={styles.about} id="about">
            <Title title="Обо мне" />

            <div className={styles.about__info}>
                <img src={avatar} alt="avatar" />

                <p>Привет! Я Екатерина, Веб-разработчик с опытом. Создаю многофункциональные сайты под любые хотелки. <br /> <br /> 
В 2022 году поступила в РТУ МИРЭА на направление «Компьтерный дизайн». Летом 2023 года попробовала себя в профессии «Дизайнер-стажёр», а осенью этого же года перешла в другой отдел и стала работать «Веб-разработчиком». <br /> <br /> 
Сейчас я продолжаю развиваться в области Веб-разработки на React и Node.js, познавать все тонкости дизайна и изучать процесс администрирования и настройки серверов.
            </p>
            </div>
        </section>
    )
}