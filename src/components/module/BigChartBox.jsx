//Styles
import '../../styles/BigChartBox.scss';

//reCharts
import { ResponsiveContainer , AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';


const data = [
    {name: "Sun", books: 4000, clothes: 2400, technology: 2400},
    {name: "Mon", books: 3000, clothes: 1398, technology: 2210},
    {name: "Tue", books: 2000, clothes: 9800, technology: 2290},
    {name: "Wed", books: 2780, clothes: 3908, technology: 2000},
    {name: "Tru", books: 1890, clothes: 4800, technology: 2181},
    {name: "Fri", books: 2390, clothes: 3800, technology: 2500},
    {name: "Sat", books: 3490, clothes: 4300, technology: 2100}
];

const BigChartBox = () => {
    return (
        <div className='bigChartBox'>
            <h2>Revenue Analytics</h2>
            <div className="chart">
                <ResponsiveContainer width='100%' height='100%'>
                    <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                    >
                    <XAxis dataKey="name" />
                    <YAxis />
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <Tooltip />
                    <Area type="monotone" dataKey="books" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="technology" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BigChartBox;