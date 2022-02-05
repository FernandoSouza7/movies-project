import { BrowserRouter,Route, Switch } from "react-router-dom";

import Home from './page/home';
import Header from "./components/header";

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;