import React from "react"
import Introduction from "./intro"
import Outline from "./outline";

import {
    NAME,
    JOB,
    OutlineItems, OutlineTitle,CoreServicesTitle,CoreServicesSubTitle,CoreServicesItem
} from "../Constants/costants"

import style from "../assets/styles/main.module.scss"
import CoreServices from "./coreServices";

const MainComponent = () =>{
    return(
        <div className={style.Container}>
            <Introduction name={NAME} job={JOB} />
            <Outline title={OutlineTitle} items={OutlineItems} />
            <CoreServices title={CoreServicesTitle} subtitle={CoreServicesSubTitle} items={CoreServicesItem} />
        </div>
    )
}

export default MainComponent