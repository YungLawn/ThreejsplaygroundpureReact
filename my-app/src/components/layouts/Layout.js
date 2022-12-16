import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
class Layout extends React.Component {
  render(){
    return (
      <>
        <Header id='header' />
        <main>{this.props.children}</main>
        <Footer id='footer' />
      </>
    )
  }
}
export default Layout;