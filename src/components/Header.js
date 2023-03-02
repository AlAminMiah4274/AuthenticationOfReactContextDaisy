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

                {user?.email && <span>Welcome {user?.email}</span>}
                <button onClick={handleLogOut} className="btn btn-sm">Small</button>
            </div>
        </div >
    );
};

export default Header;