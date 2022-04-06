import {Component} from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Components
import DashboardComponent from "./components/pages/dashboard.component";
import NotFoundComponent from "./components/pages/notfound.component";
import HistoryComponent from "./components/pages/history.component";

// Styles
import './App.css';
import 'rsuite/lib/styles/themes/default/index.less';
import DataService from "./services/data.service";
import {Alert} from "rsuite";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: undefined
        }
    }

    async componentDidMount() {
        DataService.getAllGlobal().then(
            res => {
                this.setState({
                    data: res.data
                });
            },
            err => {
                const resMessage =
                    (err.response &&
                        err.response.data &&
                        err.response.data.message) ||
                    err.message ||
                    err.toString();

                Alert.error(resMessage);
            }
        )
    }

    //This is our render component in REACT it allows us to call any components that we have if the path of our URL is changed.
    
    render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path={["/", "/home", "/dashboard"]} component={DashboardComponent} />
            <Route exact path={["/history"]} component={HistoryComponent} />
            <Route component={NotFoundComponent} />
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
