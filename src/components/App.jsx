import GlobalStyle from '@/globalStyles'
import React from 'react'
import Header from '@components/Header'
import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Settings } from '@/pages/Settings'

export const App = () => {
    return (
      <React.Fragment>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </React.Fragment>
    )
  }
