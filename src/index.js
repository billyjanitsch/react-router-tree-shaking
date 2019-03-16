// Import directly from history
import {createBrowserHistory} from 'history'
// Import Router directly instead of BrowserRouter
import {NavLink, Router} from 'react-router-dom'

const history = createBrowserHistory()

console.log(NavLink, Router, history)
