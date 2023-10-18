import React from 'react'
import { Bar } from 'react-chartjs-2'
import Box from '../components/box/Box'
import "./css.scss"
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import SearchBar from '../components/searchbar/SearchBar'
import DoughnutChart from '../components/Doughnutchart/Doughnut'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
    return (
        <>

            <div className="row w-100% p-3 ">

                <div className="row w-100 width">
                    {
                        data.summary.map((item, index) => (
                            <div key={`summary-${index}`} className="col-3 col-md-6 col-sm-12 mb">
                                <SummaryBox item={item} />
                            </div>
                        ))
                    }

                </div>
                {/* <SearchBar /> */}
            </div>
            <div className='row flex content-center'>

                <div className="col-8 min-width">
                    <Box>
                        <RevenueByMonthsChart />
                    </Box>

                </div>

                <div className="col-4">
                    <Box>
                        <DoughnutChart className="width" />
                    </Box>

                </div>
            </div>
            
            <div className='row'>
          <Box >
          <h1>Product Sell</h1>
                    <table className="borderless-table">
                        <thead>
                            <tr>
                                <th>Header 1</th>
                                <th>Header 2</th>
                                <th>Header 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Data 1</td>
                                <td>Data 2</td>
                                <td>Data 3</td>
                            </tr>
                            <tr>
                                <td>Data 4</td>
                                <td>Data 5</td>
                                <td>Data 6</td>
                            </tr>
                        </tbody>
                    </table>
          </Box>
            </div>
        </>


    )
}

export default Dashboard

const RevenueByMonthsChart = () => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor: colors.orange,
                borderRadius: 10,
                borderSkipped: 'bottom'
            }
        }
    }

    const chartData = {
        labels: data.revenueByMonths.labels,
        datasets: [
            {
                label: 'Revenue',
                data: data.revenueByMonths.data
            }
        ]
    }
    return (
        <>
            <div className="title mb">
                Revenue by months
            </div>
            <div>
                <Bar options={chartOptions} data={chartData} height={`250px`} width={`15px`} />
            </div>
        </>
    )
}