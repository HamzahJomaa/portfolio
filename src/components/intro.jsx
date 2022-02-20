import React,{ useState} from "react"
import {Typography,Box} from "@mui/material"
import style from "../assets/styles/main.module.scss"


const Introduction = ({name,job}) =>{
    const [date,setDate] = useState(new Date())
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


    return(
        <div className={style.Introduction}>
            <Box className={style.BoxIntroduction}>
                <Typography data-aos="zoom-in" data-aos-offset="50"
                            data-aos-easing="ease-in-sine" variant={"h2"}>{name}</Typography>
                <Typography data-aos="zoom-in" data-aos-offset="400"
                            data-aos-easing="ease-in-sine" variant={"h5"} dangerouslySetInnerHTML={{ __html: job }}></Typography>
                <Typography data-aos="fade-in" variant={"h6"}>{`${month[date.getMonth()]} ${date.getDate()}`}</Typography>
            </Box>
        </div>
    )
}

export default Introduction