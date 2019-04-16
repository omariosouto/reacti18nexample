import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Home } from './pages/Home'
import { Page404 } from './pages/Page404';
import { Posts } from './pages/Posts'
import { Post } from './pages/Post';


const MultiLanguageRoute = (props) => {
    const defaultLanguage = "/pt"
    const hasLang = props.computedMatch.params.lang
    const is404Page = props.path
    const isBasePathWithoutLang = props.path === "/"

    if(isBasePathWithoutLang)  return  <Redirect to={`/${defaultLanguage}`} />
    if(!hasLang && !is404Page) return <Redirect to={`/${defaultLanguage}`} />

    return <Route {...props} />    
}

export const Routes = () => {
    return (
        <Switch>
            <MultiLanguageRoute exact path="/"/>
            <MultiLanguageRoute exact path="/:lang" component={Home}/>
            <MultiLanguageRoute exact path="/:lang/posts" component={Posts}/>
            <MultiLanguageRoute exact path="/:lang/posts/:id" component={Post}/>
            <MultiLanguageRoute path="*" component={Page404}/>
        </Switch>
    )
}
