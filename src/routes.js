import React from 'react'
import { Switch, Route } from 'react-router-dom'


import { Home } from './pages/Home'
import { Page404 } from './pages/Page404';
import { Posts } from './pages/Posts'
import { Post } from './pages/Post';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/posts/:id" component={Post}/>
            <Route component={Page404}/>
        </Switch>
    )
}
