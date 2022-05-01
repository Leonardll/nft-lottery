import Head from "next/head";
import React from "react";
import   Navbar   from "./src/components/Navbar";
import { useMoralis } from "react-moralis";
import  Welcome  from "./src/components/Welcome"
import Footer from "./Footer";


const Layout = ({children}) => {
    const { isWeb3Enabled } = useMoralis()
    return (
        <React.StrictMode>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">

         <header>
         {isWeb3Enabled ?
           <Navbar />
           :
           null
        }
         </header>
         <main className="main">
        <Welcome isWeb3Enabled={isWeb3Enabled} />
        {children}
        </main>
        </div>
      <footer>
        <Footer />
      </footer>
        </React.StrictMode>
    )
}

export default Layout;