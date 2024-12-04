import { FunctionComponent } from "react";
import styles from "./skills.module.css";
import { Title } from "../title/title";
import { Skill } from "./skill/skill";

import data from "../../assets/data.json";

export const Skills: FunctionComponent = () => {

    return (
        <section className={styles.skills} id="skills">
            <Title title="Навыки" />

            <div className={styles.skills__container}>
                {/* <Skill logoLink="react.svg" name="TypeScript" /> */}

                {data.techSkills.map((item, index) => 
                    <Skill logoLink={item.logoLink} name={item.name} key={index} />
                )}
            </div>

            <div className={styles.skills__container} style={{marginTop: 55}}>
                {/* <Skill logoLink="react.svg" name="TypeScript" /> */}

                {data.designSkills.map((item, index) => 
                    <Skill logoLink={item.logoLink} name={item.name} key={index} />
                )}
            </div>
        </section>
    )
}