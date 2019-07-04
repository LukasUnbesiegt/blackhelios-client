import React, { Component } from 'react'
import styles from './Hero.module.css'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'




class Hero extends Component {


    state = {
        doc: null
    }



    componentDidMount = () => {






    }



    renderHero = () => {



        return (
            <div className="container text-center my-2 py-2">

                <h4 className="display-3">Black Helios Boilerplate</h4>

            </div>
        )




    }

    render() {

        return (
            this.renderHero()
        )
    }
}


const mapStateToProps = (state) => ({
    // locale: state.locale
})

const mapDispatchToProps = {

}


export default connect()(Hero);