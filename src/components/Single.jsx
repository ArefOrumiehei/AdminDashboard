import PropTypes from 'prop-types'
import { v4 } from 'uuid';

//Styles
import '../styles/Single.scss';

//reCharts
import { Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis , Tooltip } from 'recharts';


const Single = (props) => {
    
    return (
        <div className='single'>
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        <img src={props.img} alt="" />
                        <h2>{props.title}</h2>
                        <button>Update</button>
                    </div>
                    <div className="details">
                        {Object.entries(props.info).map((item) =>(
                            <div className="item" key={item[0]}>
                                <span className="itemTitle">{item[0]}:</span>
                                <span className="itemValue">{item[1]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr/>
                <div className="chart">
                    <ResponsiveContainer>
                        <LineChart
                        data={props.chart.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                        >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {props.chart.dataKeys.map((dataKey) => (
                            <Line key={dataKey.name} type="monotone" dataKey={dataKey.name} stroke={dataKey.color} activeDot={{ r: 8 }} />
                        ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="activities">
                <h2>Latest Activities</h2>
                {props.activities && <ul>
                    {props.activities.map((activity) => ( 
                        <li key={v4()}>
                            <div>
                                <p>{activity.text}</p>
                                <time>{activity.time}</time>
                            </div>
                        </li>
                        ))
                    }
                </ul>}
            </div>
        </div>
    );
};

Single.propTypes = {
    img : PropTypes.string,
    title : PropTypes.string,
    info : PropTypes.any,
    chart : PropTypes.any,
    activities : PropTypes.any,
}

export default Single;