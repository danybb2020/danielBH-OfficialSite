import React, {Component} from 'react';
import {Tabs,Tab, Grid, Cell, Card, CardText, CardActions, CardTitle,  IconButton, CardMenu} from "react-mdl";
import googlebooks from './assets/googlebooks.png'; 
import diary from './assets/diary.png'; 
import quiz from './assets/quiz.png'; 
import codingInterview from './assets/codingInterview.png'; 
import nomstoop from './assets/nomstoop.png'; 

import sheduler from './assets/sheduler.png'; 
import teamgenerator from './assets/teamgenerator.png'; 
import workout from './assets/workout.png'; 



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
                <CardTitle expand style={{color: '#fff', background: 'url('+quiz+') no-repeat #46B6AC contain center'}}>Project 1</CardTitle>
                <CardText>
                    Quiz App
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/multipleChoiceQuiz" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://danybb2020.github.io/multipleChoiceQuiz/" rel="noopener noreferrer" target="_blank">Website</a>
                    
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url('+googlebooks+') no-repeat #46B6AC contain center'}}>Project 2</CardTitle>
                <CardText>
                Google Book Search
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/bookSearch" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://booksearch-dbh.herokuapp.com/" rel="noopener noreferrer" target="_blank">Website</a>
                   
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url('+sheduler+') no-repeat #46B6AC', backgroundSize: 'contain',  backgroundPosition: 'center'}}>Project 2</CardTitle>
                <CardText>
                    Calendar scheduler App
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/dailyScheduler" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://danybb2020.github.io/dailyScheduler/" rel="noopener noreferrer" target="_blank">Website</a>
                   
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url('+teamgenerator+') no-repeat #46B6AC', backgroundSize: 'contain',  backgroundPosition: 'center'}}>Project 2</CardTitle>
                <CardText>
                   Team Generator App
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/teamProfileGenerator" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://danybb2020.github.io/teamProfileGenerator/" rel="noopener noreferrer" target="_blank">Website</a>
                   
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>  

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url('+workout+') no-repeat #46B6AC', backgroundSize: 'contain',  backgroundPosition: 'center'}}>Project 2</CardTitle>
                <CardText>
                    Workout Fitness Tracker App
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/workoutTracker" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://danybb2020.github.io/workoutTracker/" rel="noopener noreferrer" target="_blank">Website</a>
                   
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
                   <CardTitle expand style={{color: '#fff', background: 'url('+codingInterview+') no-repeat #46B6AC', backgroundSize: 'contain',  backgroundPosition: 'center'}}>Project 2</CardTitle>
                <CardText>
                   Coding Interview App
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/bookSearch" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://booksearch-dbh.herokuapp.com/" rel="noopener noreferrer" target="_blank">Website</a>
                   
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                
                
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url('+diary+') no-repeat #46B6AC', backgroundSize: 'contain',  backgroundPosition: 'center'}}>Project 1</CardTitle>
                <CardText>
                    Oasis Journal App
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/bookSearch" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://booksearch-dbh.herokuapp.com/" rel="noopener noreferrer" target="_blank">Website</a>
                  
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url('+nomstoop+') no-repeat #46B6AC', backgroundSize: 'contain',  backgroundPosition: 'center'}}>Project 2</CardTitle>
                <CardText>
                    NoomStop Food App
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/nomStopFoodApp" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://danybb2020.github.io/nomStopFoodApp/" rel="noopener noreferrer" target="_blank">Website</a>
                  
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
                   <CardTitle expand style={{color: '#fff', background: 'url('+googlebooks+') no-repeat #46B6AC', backgroundSize: 'contain',  backgroundPosition: 'center'}}>Project 2</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/bookSearch" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://booksearch-dbh.herokuapp.com/" rel="noopener noreferrer" target="_blank">Website</a>
                  
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url('+googlebooks+') no-repeat #46B6AC', backgroundSize: 'contain',  backgroundPosition: 'center'}}>Project 2</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/bookSearch" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://booksearch-dbh.herokuapp.com/" rel="noopener noreferrer" target="_blank">Website</a>
                  
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url('+googlebooks+') no-repeat #46B6AC', backgroundSize: 'contain',  backgroundPosition: 'center'}}>Project 2</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/bookSearch" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://booksearch-dbh.herokuapp.com/" rel="noopener noreferrer" target="_blank">Website</a>
                  
                </CardActions>
                <CardMenu style={{color:"gray"}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url('+googlebooks+') no-repeat #46B6AC', backgroundSize: 'contain',  backgroundPosition: 'center'}}>Project 2</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                <a href="https://github.com/danybb2020/bookSearch" rel="noopener noreferrer" target="_blank">Github</a>{"\n"}
                <a href="https://booksearch-dbh.herokuapp.com/" rel="noopener noreferrer" target="_blank">Website</a>
                  
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
