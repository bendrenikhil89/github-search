import React from 'react';
import { Pie } from 'react-chartjs-2';
import './LanguagesPieChart.css';
import 'chartjs-plugin-labels';
// import 'chartjs-plugin-piechart-outlabels';

const LanguagesPieChart = ({repos}) => {
    let objLanguagesCount = repos.reduce(function(obj, language) {
        if(language.language !== null){
            obj[language.language] = (obj[language.language] || 0) + 1;
        }
        return obj;
    }, {})
    
    objLanguagesCount = Object.fromEntries(
        Object.entries(objLanguagesCount).sort(([,a],[,b]) => b-a)
    );
    
    const data = {
        labels: Object.keys(objLanguagesCount),
        datasets: [
          {
            label: 'Languages',
            data: Object.values(objLanguagesCount),
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
      

    // function hexToRgb(str){
    //     var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    //     return match ? {
    //       r: match[1],
    //       g: match[2],
    //       b: match[3]
    //     } : {};
    // }

    const options = {
        title: {
          display: false,
        },
        plugins: {
            labels: {
                // render: 'percentage',
                // display: true,
                position: 'outside',
                overlap: false,
                render: (args) => {
                    return `${args.label}: ${args.value}%`;
                },
                // fontColor: function (data) {
                //     var rgb = hexToRgb(data.dataset.backgroundColor[data.index]);
                //     var threshold = 140;
                //     var luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
                //     return luminance > threshold ? 'black' : 'white';
                // },
                fontFamily: "'Poppins', Verdana",
                showZero: true,
                fontColor: '#222558',
                fontSize: 12,
                precision: 1,
            }
            // legend: false,
            // outlabels: {
            //     text: '%l %p',
            //     color: 'white',
            //     stretch: 5,
            //     font: {
            //         resizable: true,
            //         minSize: 10,
            //         maxSize: 12
            //     }
            // }


        }
    }


    return (
        <div className="languages__container">
            <div className="languages__card__title">
                Languages
            </div>
            <div>
                <Pie data={data} options={options} />
            </div>
        </div>
    )
}

export default LanguagesPieChart;
