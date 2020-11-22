import React, {Component} from 'react';
import { Cell, Grid , List, ListItem, ListItemContent ,} from 'react-mdl';

class Contact extends Component {

    render(){
        return (
            <div className="contact-body">
                <Grid className= "contact-grid">
                    <Cell col={6}>
                        <h3>Daniel Balderas H.</h3>
                        <img
                        src="./deer.jpg"
                        alt="avatar"
                        style={{height:'250px'}}
                        paddingTop="10px"
                        />
                        <p style={{width:'75%', margin: "auto", paddingTop:"1em"}}>Mexican software engineer/Project Manager/Personal trainer in Seattle straight from Veracruz, Mexico. </p>

                    </Cell>
                    <Cell col={6}>
                        <h3>Contact me</h3>
                        <hr/>
                        <div className="contact-list">
                        <List>
                             <ListItem>
                                <ListItemContent style={{fontSize:"20px", fontFamily: "Roboto"}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                     (415-990-2734)
                                    </ListItemContent>
                             </ListItem>

                             <ListItem>
                             <ListItemContent style={{fontSize:"20px", fontFamily: "Roboto"}}>
                                    <i className="fa fa-envelope-square" aria-hidden="true"/>
                                     daniel.balderas@gmail.com
                                    </ListItemContent>
                             </ListItem>

                             <ListItem>
                             <ListItemContent style={{fontSize:"20px", fontFamily: "Roboto"}}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                   www.linkedin.com/in/danielbh/
                                    </ListItemContent>
                             </ListItem>

                             <ListItem>
                             <ListItemContent style={{fontSize:"20px", fontFamily: "Roboto"}}>
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                    https://github.com/danybb2020
                                    </ListItemContent>
                             </ListItem>

                             </List>

                        </div>
                    


                    </Cell>
                </Grid>

            </div>
        
        )
    }
}

export default Contact;
