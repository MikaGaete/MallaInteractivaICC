import ReactDOM from 'react-dom/client'
import './index.css'
import './Font/Helvetica Neue Regular.otf'
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import {Router} from "./Router/Router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router/>
    </Provider>
);