import React, {useState} from "react"
import {Typography,Box} from "@mui/material"
import style from "../assets/styles/main.module.scss"


const Servies = ({title,subtitle,items}) =>{

    return(
        <div className={style.CoreServices}>
            <Box className={style.BoxServices}>
                <Typography variant={"h3"}>{title}</Typography>
                <Typography variant={"h4"}>{subtitle}</Typography>

                <Box className={style.BoxServicesItems}>
                    {items.map((item,index)=>{
                        return (
                            <Box className={style.BoxServicesItem}>
                                <Box className={style.img}>
                                    <img  width={40} src={`./core${index+1}.png`} />
                                </Box>
                                <Typography variant={"h5"}>{item.title}</Typography>
                                <Typography variant={"h6"}>{item.text}</Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </div>
    )
}

export default Servies