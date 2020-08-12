import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ProjectPage from "../../pages/ProjectPage";

class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/projects">
                        <ProjectPage/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default RouterComponent;
