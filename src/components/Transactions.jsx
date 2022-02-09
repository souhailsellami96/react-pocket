import React from 'react';
import { AreaChart,Area,Tooltip,ResponsiveContainer } from "recharts";

export default function Transactions() {
  const data =[
    {
      data2: 1500,
      data1: 1200,
    },
    {
      data2: 4500,
      data1: 800,
    },
    {
      data2: 3000,
      data1: 10200,
    },
    {
      data2: 8000,
      data1: 2590,
    },
    {
      data2: 9756,
      data1: 4560,
    },
  ]
  return <div className="transaction"> 
    <div className="transaction__info">
      <h3> Transactions </h3>
      <div className="transaction__info__detailed">
        <div>
        <h5> You Bought </h5>  
        <h4> $174,851,120</h4>
        </div> 
        <div>
        <h5> Your sold :</h5>
        <h4> $541,658,100.64 </h4>
        </div> 
      </div>  
    </div> 
    <div className="transaction__details">
    <div>
        <h4>  Statistics </h4>  
        <h4> Up by 15% </h4>
    </div>
    <div>
      <button> Year </button>
      <button> Month </button>
    </div>
    </div>
  <div className="transaction__graph">
    <ResponsiveContainer width="100%" height="100%" >
      <AreaChart width={500} height={400} data={data} margin={{top : 10}}>
        <defs>
          <linearGradient id="colorview" x1='0' y1='0' x2='0' y2='1' >
            <stop offset='30%' stopColor='blue' stopOpacity={0.4} />
            <stop offset='85%' stopColor='blue' stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area 
            type="monotone"
            dataKey="data2"
            stroke="blue"
            fill="url(#colorview)"
        />
        <Area 
            type="monotone"
            dataKey="data1"
            stroke="blue"
            fill="url(#colorview)"
        />      
      </AreaChart>
    </ResponsiveContainer>

  </div>
  </div>;
}
