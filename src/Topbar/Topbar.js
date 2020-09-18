import React from 'react'
import classes from './Topbar.module.css'


const Topbar = () =>{
  
    return(
        <header>
            <nav className={classes.Topbar}>
                <i className="fab fa-amazon"></i>
            </nav>
        </header>
    )
}

export default Topbar