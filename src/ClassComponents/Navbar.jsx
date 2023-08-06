import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    getData(e) {
        this.setState({ search: e.target.value })
    }

    postData(e) {
        e.preventDefault()
        this.props.SearchNews(this.state.search)
        this.setState({ search: "" })
    }
    render() {



        return (
            <>
                <nav className="navbar navbar-expand-lg bg sticky-top mb-2">
                    <div className="container-fluid">
                        <Link className="navbar-brand bg" to="/" onClick={() => this.props.SearchNews("")} >NewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" aria-current="page" to="/" onClick={() => this.props.SearchNews("")} >All</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link bg" to="/crime" onClick={() => this.props.SearchNews("")}>Crime</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link bg" to="/politics" onClick={() => this.props.SearchNews("")} >Politics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link bg" to="/education" onClick={() => this.props.SearchNews("")} >Education</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle bg" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Others
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item " to="/science" onClick={() => this.props.SearchNews("")} >Science</Link></li>
                                        <li><Link className="dropdown-item " to="/technology" onClick={() => this.props.SearchNews("")} >Technology</Link></li>
                                        <li><Link className="dropdown-item " to="/games" onClick={() => this.props.SearchNews("")}>Games</Link></li>
                                        <li><Link className="dropdown-item " to="/cricket" onClick={() => this.props.SearchNews("")} >Cricket</Link></li>
                                        <li><Link className="dropdown-item " to="/fifa" onClick={() => this.props.SearchNews("")}>Fifa</Link></li>
                                        <li><Link className="dropdown-item " to="/world" onClick={() => this.props.SearchNews("")}>World</Link></li>
                                        <li><Link className="dropdown-item " to="/india" onClick={() => this.props.SearchNews("")}>India</Link></li>
                                        <li><Link className="dropdown-item " to="/jokes" onClick={() => this.props.SearchNews("")} >Jokes</Link></li>
                                        <li><Link className="dropdown-item " to="/covid" onClick={() => this.props.SearchNews("")} >Covid</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle bg" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Language
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item  " onClick={() => this.props.changeLanguage('en')}>English</button></li>
                                        <li><button className="dropdown-item  " onClick={() => this.props.changeLanguage('hi')}>Hindi</button></li>
                                    </ul>
                                </li>

                            </ul>
                            <form className="d-flex bg  w-100" role="search" onSubmit={(e) => this.postData(e)} >
                                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" name='search' onChange={(e) => this.getData(e)} value={this.state.search} />
                                <button className="btn text-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
