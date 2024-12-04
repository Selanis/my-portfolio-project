import { FunctionComponent } from "react";
import styles from "./title.module.css";

type TPropsType = {
    title: string;
}

export const Title: FunctionComponent<TPropsType> = (props) => {
    const { title } = props

    return (
        <div className={styles.title}>
            <h2 className={styles.title__text}>{title}</h2>
        </div>
    )
}