import { FunctionComponent } from "react";
import styles from "./header.module.css";
import { Navigation } from "../navigation/navigation";

export const Header: FunctionComponent = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__textContainer}>
                <Navigation />

                <div className={styles.header__mainText}>
                    <div>
                        <span>Web</span>
                        <h1>developer</h1>
                    </div>

                    <div className={styles.header__mainText__text}>
                        <h3>Задизайню, заверстаю, опубликую</h3>

                        <p>Любая ваша идея будет реализована благодаря современным стекам программирования, а дизайн будет выглядеть современным и удобным. </p>
                    </div>

                    <a href="#portfolio"><button>Мои проекты</button></a>
                </div>
            </div>

            <div className={styles.header__photo}></div>
        </header>
    )
}