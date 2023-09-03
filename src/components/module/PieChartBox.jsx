import React from 'react';

//reCharts
import { ResponsiveContainer , PieChart , Pie , Cell, Tooltip } from 'recharts';

//Styles
import '../../styles/PieChartBox.scss'


const pieChartBox = [
    {id : 1 , name : 'Mobile' , value : 400 , color : "#0088fe"},
    {id : 2 , name : 'Desktop' , value : 300 , color : "#00c49f"},
    {id : 3 , name : 'Laptop' , value : 300 , color : "#ffbb28"},
    {id : 4 , name : 'Tablet' , value : 200 , color : "#ff8042"},
]

const PieChartBox = () => {
    return (
        <div className='pieChartBox'>
            <h2>Leads by Source</h2>
            <div className="chart">
                <ResponsiveContainer width='99%' height={300}>
                    <PieChart>
                        <Tooltip
                        contentStyle={{background:"white" , borderRadius: '5px'}}    
                        />
                        <Pie
                            data={pieChartBox}
                            innerRadius={'70%'}
                            outerRadius={'90%'}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {pieChartBox.map((item) => (
                                <Cell key={item.id} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {pieChartBox.map(item => (
                    <React.Fragment key={item.id}>  
                        <div className="option" key={item.id}>
                            <div className="title">
                                <div className="dot" style={{backgroundColor: item.color}}/>
                                <span>{item.name}</span>
                            </div>
                            <span>{item.value}</span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default PieChartBox;