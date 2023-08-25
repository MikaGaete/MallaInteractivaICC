import ReactDOM from 'react-dom/client'
import './index.css'
import {Malla} from "./Malla.jsx";
import {Provider} from "react-redux";
import {store} from "./store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Malla/>
    </Provider>
);