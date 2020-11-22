import React, {Component} from 'react';
import {Tabs,Tab, Grid, Cell, Card, CardText, CardActions, CardTitle, Button, IconButton, CardMenu} from "react-mdl";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0 };
    }

    toggleCategories (){
       if (this.state.activeTab === 0 ){
            return(
                
               <div className="projects-grid">
                   <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 1</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 2</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 3</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 4</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>  

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 3</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                                  
                </div>
            )

        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                   <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 1</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                
                
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 2</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 3</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 4</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>                    
                </div>
            )
        } else if(this.state.activeTab === 2) {
        return(
            <div className="projects-grid">
                   <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 1</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 2</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Project 3</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Website</Button>
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                </div> )
    }
    } 

render () {
    return (
<       div className="category-tabs">
          <Tabs activeTab= {this.state.activeTab} onChange = {(tabId)=>this.setState({ activeTab: tabId})} ripple>
          <Tab>Personal</Tab>
          <Tab>Group</Tab>
          <Tab>Future</Tab>
         </Tabs>

    <Grid>
        <Cell col={12}>
        <div className="content"> {this.toggleCategories()}</div>
        </Cell>
    </Grid>
   

</div>

    )
}

    }


export default Project;
