// import React from 'react'

// import { Children } from "react";
// import { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PropType from "prop-types"
import NavigationBar from "./NavigationBar";
import "../styles/global.css"
// import PropTypes from "prop-types";

export default function Page({ children }) {
    return (
        <>
            <Header />
            <div className="nav-main">
                <NavigationBar />
                {children}
            </div>
            <Footer />
        </>
    )
}

Page.propTypes = {
    children: PropType.any
}