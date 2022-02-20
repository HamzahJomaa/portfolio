import React, {useState} from "react"
import {Typography,Box} from "@mui/material"
import style from "../assets/styles/main.module.scss"


const Outline = ({title,items}) =>{

    return(
        <div className={style.Outline}>
            <Box className={style.BoxOutline}>
                <Typography variant={"h3"}>{title}</Typography>
                <Box className={style.BoxOutlineItems}>
                    {items.map(item=>{
                        return <Typography variant={"h5"}>{item}</Typography>
                    })}
                </Box>
            </Box>
        </div>
    )
}

export default Outline