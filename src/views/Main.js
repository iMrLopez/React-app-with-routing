import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function Main(props) {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
            </Switch>
        </div>
    )
}


export default Main;