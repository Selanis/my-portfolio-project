import { FunctionComponent } from "react";
import styles from "./portfolio.module.css";

import data from "../../assets/data.json";
import { Title } from "../title/title";
import { Case } from "./case/case";

export const Portfolio: FunctionComponent = () => {

    return (
        <section className={styles.portfolio} id="portfolio">
            <Title title="Портфолио" />

            <div className={styles.portfolio__container}>
                {
                    data.portfolio.map((item, index) => 
                        <Case item={item} key={index} />
                    )
                }
            </div>
        </section>
    )
}