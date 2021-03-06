import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';


// const mountNode = document.getElementById('App');

const Chart = ({samples}) => {

    // const data = {
    //   columns: [
    //     // ['data1', 30, 200, 100, 400, 150, 250],
    //     // ['data2', 50, 20, 10, 40, 15, 25]
    //     ['data1'].concat(samples)
    //   ]
    // };

    const bar = {
      n: samples
    }

    return (
        <div>
            <C3Chart  data={{ json: bar, type: 'bar' }} />
            <p>Number of sample point: {samples.length}</p>
        </div>
    )
}
 
export default Chart; 
// ReactDOM.render(<C3Chart data={data} />, mountNode);

