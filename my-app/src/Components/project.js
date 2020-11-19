import React, {Component} from 'react';
import {Tabs,Tab} from "react-mdl";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0 };
    }

    toggleCategories (){
        if (this.state.activeTab === 0 ){
            return(
                <div><h1>This is PERSONAL</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is GROUP</h1></div>
            )
        }
    }



render () {
    return (
<div className="category-tabs">
    <Tabs activeTab= {this.state.activeTab} onchange = {(tabId)=>this.setState({ activeTab: tabId})} ripple>
<Tab>Personal</Tab>
<Tab>Group</Tab>
</Tabs>

<section className="projects-grid">
    {this.toggleCategories()}
</section>
</div>

    )
}

    }


export default Project;
