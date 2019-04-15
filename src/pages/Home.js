import React from 'react'
import { Link } from 'react-router-dom'

export const Home = (props) => {
    return (
        <div>
            <h1>Bem vindo!</h1>
            <Link to="/posts">Posts Page</Link>
        </div>
    )
}
