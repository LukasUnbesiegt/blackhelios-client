import React from 'react'
import { Line, Bar } from 'react-chartjs-2';



function Chart({
    data,
    title,
    type
}) {


    const renderChart = () => {


        switch (type) {
            case 'line':
                return (
                    <Line
                        data={data}
                        options={{
                            title: {
                                display: true,
                                text: title,
                                fontSize: 25,
                                defaultFontFamily: 'Helvetica',
                            },
                            legend: {
                                display: true,
                                position: 'right',
                                labels: {
                                    // This more specific font property overrides the global property
                                    fontColor: 'black',
                                    defaultFontFamily: 'Helvetica',


                                }
                            }

                        }}
                    />
                )
                break;
            case 'bar':
                return (
                    <Bar
                        data={data}
                        options={{
                            title: {
                                display: true,
                                text: title,
                                fontSize: 25,
                                defaultFontFamily: 'Helvetica',
                            },
                            legend: {
                                display: true,
                                position: 'right',
                                defaultFontFamily: 'Helvetica',
                            }
                        }}
                    />
                )
                break;

            default:
                break;
        }
    }

    return (
        <div>
            {renderChart()}
        </div>
    )
}




export default Chart;