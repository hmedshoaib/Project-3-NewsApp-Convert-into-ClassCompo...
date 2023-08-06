import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            language: "en",
            search: ""
        }
    }

    changeLanguage = (data) => {
        this.setState({ language: data })
    }

    SearchNews = (data) => {
        this.setState({ search: data })
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar changeLanguage={this.changeLanguage} SearchNews={this.SearchNews} />
                    <Routes>
                        <Route path='' element={<Home search={this.state.search} language={this.state.language} q="All" />} />
                        <Route path='/All' element={<Home search={this.state.search} language={this.state.language} q="All" />} />
                        <Route path='/crime' element={<Home search={this.state.search} language={this.state.language} q="crime" />} />
                        <Route path='/politics' element={<Home search={this.state.search} language={this.state.language} q="politics" />} />
                        <Route path='/education' element={<Home search={this.state.search} language={this.state.language} q="education" />} />
                        <Route path='/science' element={<Home search={this.state.search} language={this.state.language} q="science" />} />
                        <Route path='/technology' element={<Home search={this.state.search} language={this.state.language} q="technology" />} />
                        <Route path='/games' element={<Home search={this.state.search} language={this.state.language} q="games" />} />
                        <Route path='/cricket' element={<Home search={this.state.search} language={this.state.language} q="cricket" />} />
                        <Route path='/fifa' element={<Home search={this.state.search} language={this.state.language} q="fifa" />} />
                        <Route path='/world' element={<Home search={this.state.search} language={this.state.language} q="world" />} />
                        <Route path='/india' element={<Home search={this.state.search} language={this.state.language} q="india" />} />
                        <Route path='/jokes' element={<Home search={this.state.search} language={this.state.language} q="jokes" />} />
                        <Route path='/covid' element={<Home search={this.state.search} language={this.state.language} q="covid" />} />

                    </Routes>
                </BrowserRouter>
                <Footer />
            </>
        )
    }
}
