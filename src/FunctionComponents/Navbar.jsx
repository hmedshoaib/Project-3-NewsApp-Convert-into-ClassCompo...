import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    var [search, setsearch] = useState("")
    function getData(e) {
        setsearch(e.target.value)
    }

    function postData(e) {
        e.preventDefault()
        props.SearchNews(search)
        setsearch(search='')
    }




    return (
        <>
            <nav className="navbar navbar-expand-lg bg sticky-top mb-2">
                <div className="container-fluid">
                    <Link className="navbar-brand bg" to="/" onClick={() => props.SearchNews("")} >NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/" onClick={() => props.SearchNews("")} >All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link bg" to="/crime" onClick={() => props.SearchNews("")}>Crime</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link bg" to="/politics" onClick={() => props.SearchNews("")} >Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link bg" to="/education" onClick={() => props.SearchNews("")} >Education</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle bg" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Others
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item " to="/science" onClick={() => props.SearchNews("")} >Science</Link></li>
                                    <li><Link className="dropdown-item " to="/technology" onClick={() => props.SearchNews("")} >Technology</Link></li>
                                    <li><Link className="dropdown-item " to="/games" onClick={() => props.SearchNews("")}>Games</Link></li>
                                    <li><Link className="dropdown-item " to="/cricket" onClick={() => props.SearchNews("")} >Cricket</Link></li>
                                    <li><Link className="dropdown-item " to="/fifa" onClick={() => props.SearchNews("")}>Fifa</Link></li>
                                    <li><Link className="dropdown-item " to="/world" onClick={() => props.SearchNews("")}>World</Link></li>
                                    <li><Link className="dropdown-item " to="/india" onClick={() => props.SearchNews("")}>India</Link></li>
                                    <li><Link className="dropdown-item " to="/jokes" onClick={() => props.SearchNews("")} >Jokes</Link></li>
                                    <li><Link className="dropdown-item " to="/covid" onClick={() => props.SearchNews("")} >Covid</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle bg" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item  " onClick={() => props.changeLanguage('en')}>English</button></li>
                                    <li><button className="dropdown-item  " onClick={() => props.changeLanguage('hi')}>Hindi</button></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex bg  w-100" role="search" onSubmit={(e) => postData(e)} >
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" name='search' onChange={(e) => getData(e)} value={search} />
                            <button className="btn text-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )

}
