import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'




export const Routes = () => {
    return (
        <Switch>
        {/* // [Como gerenciar sub rotas no React router] */}
        <Route path="/" component={Home} />
    </Switch>
    )
}
