import { Switch, Route } from 'react-router-dom'
import Collections from './pages/Collections'
import Details from './pages/Details'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ Collections } />
      <Route path="/details" component={ Details } />
    </Switch>
  )
}