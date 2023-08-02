import PropTypes from 'prop-types';
import '../../styles/ChartBox.scss'

import { Link } from 'react-router-dom'
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";



const ChartBox = (props) => {
    return (
        <div className='chartBox'>
            <div className="boxInfo">
                <div className="title">
                    {props.icon}
                    <h2>{props.title}</h2>
                </div>
                <h2>{props.number}</h2>
                <Link to='/' style={{color: props.color}}>View all</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip 
                            contentStyle={{background:'transparent', border: 'none'}}
                            labelStyle={{display:'none'}}
                            position={props.position}
                            />
                            <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="persentage" style={{color : props.persentage < 0 ? "tomato" : "limegreen" }}>{props.persentage}%</span>
                    <span className="duration">in this month</span>
                </div>
            </div>
        </div>
    );
};

ChartBox.propTypes = {
    icon : PropTypes.element,
    title : PropTypes.string ,
    number : PropTypes.string,
    color : PropTypes.string,
    chartData : PropTypes.any,
    persentage : PropTypes.number,
    dataKey : PropTypes.string,
    position : PropTypes.any
}

export default ChartBox;