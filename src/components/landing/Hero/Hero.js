import React, { Component } from 'react'
import styles from './Hero.module.css'
import { connect } from 'react-redux'
import { Link, RichText, Date } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';


import LoadingComponent from '../../reusable/Loading/LoadingComponent'


class Hero extends Component {


    state = {
        doc: null
    }



    componentDidMount = () => {






    }



    renderHero = () => {



        return (
            <div>
                HERO
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