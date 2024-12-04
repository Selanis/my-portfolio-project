import { FunctionComponent } from "react";
import styles from "./skill.module.css";

type TPropsType = {
    name: string;
    logoLink: string;
}

export const Skill: FunctionComponent<TPropsType> = ({ name, logoLink }) => {

    return (
        <div className={styles.skill}>
            <img src={`./images/skills/${logoLink}`} alt={name} />

            <p className={styles.skill__text}>{name}</p>
        </div>
    )
}