import React, { useEffect, useState } from 'react';
import {Doughnut} from 'react-chartjs-2';
import info from 'systeminformation';


export const OnlineUsers = () => {
    const [data, setData] = useState({
        labels: [
            'Online',
            'Offline',
        ],
        datasets: [{
            data: [35, 65],
            backgroundColor: [
            '#71c799',
            '#f7f7f7'
            ],
            hoverBackgroundColor: [
            '#7ad6a5',
            '#f7f7f7'
            ]
        }]
    })

    useEffect(() => {
        const t = setInterval(async () => {
            await info.cpuCurrentspeed()
            .then(load => {
                let d = data;
                d.datasets[0].data[0] = load.avg;
                d.datasets[0].data[1] = load.max;
                setData(d)
                console.log(load)
            })
        }, 1000);

        // return clearInterval(t);
    }, [data])

    return(
        <Doughnut data={data} />
    );
}