import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Authenticated from '../reusable/auth/Authenticated'

import SideBar from './sidebar/index'
import TopBar from './topbar/TopBar'
import styles from './AdminRoutes.module.css';



class AdminRoutes extends Component {




  state = {
    direction: false,
    changeStyle: false,

  }


  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }



  changeWidth = () => {
    this.setState(prevState => ({
      changeStyle: !prevState.changeStyle
    }));
  }


  changeDirection = () => {
    this.setState(prevState => ({
      direction: !prevState.direction
    }));
  }








  render() {


    let sidebarWidth = '2';
    let topbarWidth = '10'
    let iconDirection = 'left'


    if (this.state.changeStyle) {
      sidebarWidth = '1';
      topbarWidth = '11'
    }

    if (this.state.direction) {
      iconDirection = 'right'
    }



    return (


      <Fragment>


        <nav className="navbar">
          <div className="container-fluid">

            <div className="row">
              <div className={`col-xl-${sidebarWidth} ${styles.sidebar} fixed-top`}>
                <SideBar
                  changeStyle={this.state.changeStyle}

                />
              </div>
              <div className={`col-xl-${topbarWidth} col-lg-11  ml-auto  fixed-top ${styles.topbar}`} >

                <div className={`${styles.topbarNavs}`}>

                  <TopBar
                    changeWidth={this.changeWidth}
                    changeDirection={this.changeDirection}
                    iconDirection={iconDirection}


                  />

                </div>

              </div>
            </div>

          </div>


        </nav>


        <section className="my-3 py-3">

          <div className="container-fluid">
            <div className="row">
              <div className={`col-xl-${topbarWidth} col-lg-10 ml-auto`}>
                <Switch>
                  <Route exact path="/admin" render={(props) => (<Home />)} />
                </Switch>
              </div>

            </div>

          </div>


        </section>





      </Fragment>
    )





  }
}





// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }



export default connect()(AdminRoutes);