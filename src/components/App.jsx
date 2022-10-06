import GlobalStyle from '@/globalStyles'
import React from 'react'
import Header from '@components/Header'
import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/home'
import { Settings } from '@/pages/settings'

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
