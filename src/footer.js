import { Typography } from '@material-ui/core'
import React from 'react'

function Footer() {
let date = new Date()
    date = date.getFullYear()

    return (
        <div style={{position:"relative", bottom:"0", textAlign:'center', width:"100%", marginTop:"20px"}}>
            <Typography variant="body1">Copyright Siddhant {date}</Typography>
        </div>
    )
}

export default Footer
