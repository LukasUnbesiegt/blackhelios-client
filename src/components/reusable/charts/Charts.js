import React, { Component, Fragment } from 'react'
import { chartData } from '../../../../seeds/AdminHome'
import Chart from './chart/Chart'


class Charts extends Component {



    renderLineCharts = () => {


        return chartData.map((data) => {

            return (
                <div className="col-md-6">
                    <Chart
                        data={data}
                        title={data.title}
                        type={data.type}

                    />
                </div>

            )

        })



    }



    render() {



        return (


            <Fragment>
                <div className="container">

                    <div className="row">
                        {this.renderLineCharts()}
                    </div>

                </div>

            </Fragment>
        )
    }
}




export default Charts;