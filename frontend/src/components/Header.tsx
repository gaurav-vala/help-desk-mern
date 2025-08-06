import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import { AppDispatch } from "../app/store";

const Header = () => {
    const navigate = useNavigate()
    const dispath = useDispatch<AppDispatch>()
    const { user } = useSelector((state: any) => state.auth)

    const onLogout = () => {
        dispath(logout())
        dispath(reset())
        navigate('/')
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to={'/'}>Support Desk</Link>
            </div>
            <ul>
                {
                    user ? (<button className="btn" onClick={onLogout}><FaSignOutAlt /> Logout</button>)
                        : (<>
                            <li>
                                <Link to={'/login'}><FaSignInAlt />Login</Link>
                            </li>
                            <li>
                                <Link to={'/register'}><FaUser />Register</Link>
                            </li>
                        </>)
                }

            </ul>
        </header>
    )
}

export default Header