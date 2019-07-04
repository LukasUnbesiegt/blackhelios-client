
import React, { Component, Fragment } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class TopBar extends Component {

    state = {
        dropdownOpen: false
    }

    onMouseEnter = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }


    onMouseLeave = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }


    renderSettingBar = () => {

        return (

            <Dropdown isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
                onMouseEnter={
                    () => {
                        setTimeout(() => {
                            this.onMouseEnter()
                        }, 200);
                    }
                }
                onMouseLeave={this.onMouseLeave}
                direction="down"
            >
                <DropdownToggle nav>
                    <a className="nav-link nav-link-icon " href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        <i className="ni ni-circle-08" style={{ fontSize: '36px', color: 'white', }}></i>
                        <span className="nav-link-inner--text d-lg-none">Sample</span>
                    </a>
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem>
                        <a className="dropdown-item" href="/admin/infouser">Sample</a>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem> <a className="dropdown-item" href="#">Sample</a></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        <button
                            className="dropdown-item"

                        >Sample</button>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }

    render() {

        const { changeWidth, changeDirection, iconDirection } = this.props;


        return (
            <Fragment>
                <div className="mr-auto p-3 ">
                    <a
                        style={{ color: '#fff', cursor: 'pointer' }}
                        onClick={
                            () => {
                                changeWidth()
                                changeDirection()

                            }
                        }
                    >
                        <i className={` ni ni-bold-${iconDirection}`} style={{ fontSize: '25px' }}></i>
                    </a>

                </div>

                {this.renderSettingBar()}
            </Fragment>
        )
    }
}






export default TopBar;