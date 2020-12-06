import React from 'react';
import { Bar } from 'react-chartjs-2';
import './MostPopularBar.css';
import 'chartjs-plugin-labels';

const MostPopularBarChart = ({repos}) => {
    let objMostPopularCount = repos.map(r => {
        return {label: r.name, count: r.stargazers_count}
    })

    objMostPopularCount = objMostPopularCount.sort((a,b) => a.count > b.count ? -1 : 1).slice(0,5);
    const prjNames = objMostPopularCount.map(x => Object.values(x)[0]);
    const starsCount = objMostPopularCount.map(x => Object.values(x)[1]);
    
    const data = {
        labels: prjNames,
        datasets: [
          {
            label: 'Most star gazed projects',
            data: starsCount,
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 205, 86, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(153, 102, 255, 1)'
            ]
          }
        ]
      }
      

    
    const options = {
        title: {
          display: false,
        },
        plugins: {
            labels: {
                render: 'value',
                fontSize: 12
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    callback: function(tick) {
                        var characterLimit = 10;
                        if (tick.length >= characterLimit) {
                            return tick.slice(0, tick.length).substring(0, characterLimit - 1).trim() + '...';
                        }
                        return tick;
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        }
    }


    return (
        <div className="mostpopular__container">
            <div className="mostpopular__card__title">
                Most Popular
            </div>
            <div>
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}

export default MostPopularBarChart;
