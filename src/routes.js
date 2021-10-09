import { Switch, Route } from 'react-router-dom'
import Collections from './pages/Collections'
import Details from './pages/Details'
import User from './pages/User'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ Collections } />
      <Route path="/user" component={ User } />
      <Route path="/details" component={ Details } />
    </Switch>
  )
}