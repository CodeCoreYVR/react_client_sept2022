import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            |
            <NavLink to='/questions'>QuestionIndex</NavLink>
            |
            <NavLink to='questions/new'>New Question</NavLink>
        </nav>
    )
}

export default NavBar;


