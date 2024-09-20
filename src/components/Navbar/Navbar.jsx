import React, { useEffect } from 'react'
import './Navbar.css'
import { auth, logout } from '../../config/Firebase'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ mode, btnmode, username }) => {
    const navigate = useNavigate()

    useEffect(()=>{
        
        
    },[navigate])
    const handleLogout = () => {
        try{
            logout();
            
            navigate('/login')

        }catch(error){
            alert(`${error.code}`)

        }
            
    }

    const classString = `navbar navbar-expand-lg navbar-${mode} bg-${mode}`

    return (
        <div>
            <nav className={classString}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {auth.currentUser  ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={`/home/${username}`}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={`/createblog/${username}`}>Create Blog</Link>
                                    </li>
                                </>
                            ):(
                                <li className="nav-item">
                                        <Link className="nav-link active" to={`/`}>Home</Link>
                                </li>
                                
                            )}
                        </ul>
                        <form className="d-flex" role="search">
                            {!auth.currentUser ? (
                                <>
                                
                                </>
                            ):(<>
                            <Link className={`btn btn-${btnmode} mx-2`} to="/login">Login</Link>
                            <button className={`btn btn-${btnmode} mx-2`} onClick={handleLogout}>Logout</button>
                            </>
                            )}
                            
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
