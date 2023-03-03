import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-3xl">Awesome Auth</Link>

                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>

                {user?.email && <span>Welcome {user?.email}</span>}
                {user?.email ?
                    <button onClick={handleLogOut} className="btn btn-sm">Log Out</button> :
                    <Link to='/login'>
                        <button className='btn btn-sm'>Log in</button>
                    </Link>
                }
            </div>
        </div >
    );
};

export default Header;