import PropTypes from 'prop-types'

//reCharts
import { BarChart, Bar , ResponsiveContainer, Tooltip } from "recharts";

//Styles
import '../../styles/BarChartBox.scss'


const BarChartBox = (props) => {
    return (
        <div className="barChartBox">
            <h2>{props.title}</h2>
            <div className="chart">
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart data={props.barChartData}>
                        <Tooltip 
                            contentStyle={{background : '#2a3447' , borderRadius : '5px'}} 
                            labelStyle={{display : 'none'}}
                            cursor={{fill:'none'}}
                            />
                        <Bar dataKey={props.dataKey} fill={props.color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

BarChartBox.propTypes = {
    title : PropTypes.string,
    barChartData : PropTypes.any,
    dataKey : PropTypes.string,
    color : PropTypes.string,
}

export default BarChartBox;