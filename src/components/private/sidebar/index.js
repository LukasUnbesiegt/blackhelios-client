
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { navitems } from './navitems'
import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.css'
import Collapse from './collapse/collapse'
import Divider from '@material-ui/core/Divider';


class SideBar extends Component {











    render() {





        const renderNavItems = () => {
            const navItems = navitems.map((item, i) => {
                return (
                    <Fragment>
                        {
                            item.dropdowns ? <Collapse
                                i={i}
                                item={item}
                                sidebarlink={styles.sidebarlink}
                                changeStyle={this.props.changeStyle}

                            /> : (
                                    <li className="" key={i}>
                                        <NavLink className={`nav-link text-white p-3   ${styles.sidebarlink} `}

                                            to={item.linkTo}
                                        >
                                            <i className={`fa ${item.icon} fa-lg`}></i>
                                            <span
                                                style={{
                                                    fontSize: '12px'
                                                }}
                                            >
                                                {
                                                    this.props.changeStyle ? '' : `${item.name}`
                                                }

                                                {item.dropdowns && !this.props.changeStyle && (<i className="ni ni-bold-down ml-2"></i>)}

                                            </span>

                                        </NavLink>

                                    </li>
                                )
                        }

                    </Fragment>

                )

            })

            return (
                <Fragment>
                    <ul className="navbar-nav mt-4">


                        {
                            !this.props.changeStyle ? (
                                <h4 className="display-4 my-1 py-1 text-center text-white">Logo Header</h4>
                            ) : ''
                        }

                        {navItems}

                        <Divider />


                        {
                            !this.props.changeStyle && (
                                <div className="d-flex flex-column container my-2 py-1 text-center" style={{ color: '#fff' }}>

                                    <div>
                                        <span style={{ fontSize: '19px', letterSpacing: '1px' }}>Footer</span>
                                    </div>
                                    <div>
                                        <a href="" style={{ fontSize: '12px', letterSpacing: '1px', textDecoration: 'none', color: 'inherit' }}>footer@gmail.com</a>
                                    </div>
                                    <div >
                                        <a href="" style={{ fontSize: '12px', letterSpacing: '1px', color: 'inherit', textDecoration: 'none' }}> + 959 775775639</a>
                                    </div>
                                </div>
                            )
                        }

                    </ul>

                </Fragment>



            )



        }






        return (
            <Fragment>
                {renderNavItems()}
            </Fragment>
        )
    }
}





export default SideBar;