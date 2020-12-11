import React, {Component} from 'react';
import {Grid, Cell } from "react-mdl";

class Aboutme extends Component {

    render(){
        return (
            <div className="contact-body">
            <Grid className= "contact-grid">
                 <Cell col={12}>
                    <h3>Daniel Balderas H.</h3>
                    <img
                    src="./deer.jpg"
                    alt="avatar"
                    style={{height:'250px'}}
                    paddingTop="10px"
                    />
                    <p style={{width:'75%', margin: "auto", paddingTop:"1em"}}>Mexican software engineer/Project Manager/Personal trainer  </p> 
                    <p style={{width:'75%', margin: "auto", paddingTop:"1em"}}>Seattle, WA, USA. Directly from Veracruz, Mexico.  </p> 
                 
                </Cell>
                
            </Grid>

        </div>
    
    )
}
}



export default Aboutme;
