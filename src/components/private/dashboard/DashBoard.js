import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import HeaderFooter from '../../landing/Layout/HeaderFooter'




class DashBoard extends Component {








    render() {

        const { user } = this.props;


        console.log(user)

        const renderDashboard = () => {






            return (
                <Fragment>
                    <HeaderFooter
                    >







                    </HeaderFooter>

                </Fragment>
            )






        }






        return (
            <div>
                {renderDashboard()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    async: state.async,


})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);