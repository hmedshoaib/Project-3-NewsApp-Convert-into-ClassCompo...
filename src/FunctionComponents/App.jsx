import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

export default function App() {


    var [language, setlanguage] = useState("en")
    var [search, setsearch] = useState("")

    const changeLanguage = (data) => {
        setlanguage(data)
    }

    const SearchNews = (data) => {
        setsearch(data)
    }
    return (
        <>
            <BrowserRouter>
                <Navbar changeLanguage={changeLanguage} SearchNews={SearchNews} />
                <Routes>
                    <Route path='' element={<Home search={search} language={language} q="All" />} />
                    <Route path='/All' element={<Home search={search} language={language} q="All" />} />
                    <Route path='/crime' element={<Home search={search} language={language} q="crime" />} />
                    <Route path='/politics' element={<Home search={search} language={language} q="politics" />} />
                    <Route path='/education' element={<Home search={search} language={language} q="education" />} />
                    <Route path='/science' element={<Home search={search} language={language} q="science" />} />
                    <Route path='/technology' element={<Home search={search} language={language} q="technology" />} />
                    <Route path='/games' element={<Home search={search} language={language} q="games" />} />
                    <Route path='/cricket' element={<Home search={search} language={language} q="cricket" />} />
                    <Route path='/fifa' element={<Home search={search} language={language} q="fifa" />} />
                    <Route path='/world' element={<Home search={search} language={language} q="world" />} />
                    <Route path='/india' element={<Home search={search} language={language} q="india" />} />
                    <Route path='/jokes' element={<Home search={search} language={language} q="jokes" />} />
                    <Route path='/covid' element={<Home search={search} language={language} q="covid" />} />

                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
