import { FunctionComponent } from "react";
import styles from "./case.module.css";

type TPropsType = {
    item: {
        link: string;
        name: string;
        image: string;
        tags: Array<string>;
    }
}

export const Case: FunctionComponent<TPropsType> = (props) => {
    const {link, name, image, tags} = props.item

    return (
        <div className={styles.case}>
            <a href={link} className={styles.case__preview} target="_blank" style={{background: `linear-gradient(180deg, rgba(241,198,46,0) 0%, rgba(241,198,46,0.6) 100%), url('./images/portfolio/${image}') center/cover no-repeat`}}>
                <p className={styles.case__preview__text}>{name}</p>
            </a>

            <div className={styles.case__tags}>
                {tags.map((item, index) => 
                    <h4 className={styles.case__tags__tag} key={index}>#{item}</h4>
                )}
            </div>
        </div>
    )
}