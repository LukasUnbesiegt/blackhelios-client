import React, { Component, Fragment } from 'react'
import HeaderFooter from './Layout/HeaderFooter'

import Hero from './Hero/Hero'



class Home extends Component {



    render() {




        return (
            <Fragment>

                <HeaderFooter
                >

                    <Hero />

                </HeaderFooter>


            </Fragment>
        )
    }
}




export default Home;