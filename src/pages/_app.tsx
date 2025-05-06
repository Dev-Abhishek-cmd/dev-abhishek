import React from 'react'
import { useRouter } from 'next/router'
import "../../public/assets/css/globals.css";
import "./index.css";
import "./app.css";
import "./educations.css";
import "./experience.css";
import "./projects.css";
import "./opensource.css";
import "./contact.css";
import "./splash.css";

const HomeLayout = (props: any) => {
    const { Component, pageProps } = props

    if (typeof window == undefined) {
        return null
    }
    const getLayout = Component.getLayout ?? ((page: any) => { return page })

    return (
        getLayout(<Component {...pageProps} />)
    )
}

const App = (props: any) => {
    const router = useRouter();
    return (
        <HomeLayout {...props} />
    )
}

export default App



