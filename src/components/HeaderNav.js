import React from 'react'
// import { NavLink } from 'react-router-dom'
import { AppBar, Button, Toolbar } from '@material-ui/core';

export default function HeaderNav () {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="primary" variant="contained">Home</Button>
        <Button color="primary" variant="contained">Create Poll</Button>
        <Button color="primary" variant="contained">Leaderboard</Button>
      </Toolbar>
    </AppBar>


    // <nav className='nav'>
    //   <ul>
    //     <li>
    //       <NavLink to='/' exact activeClassName='active'>
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/new' activeClassName='active'>
    //         New Tweet
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
  )
}