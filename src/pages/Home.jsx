import '../styles/Home.scss'

import { usersDataChart , productsDataChart , revenueDataChart , conversionDataChart} from '../js/chartData'
import { visitDataBoxChart , revenueDataBoxChart } from '../js/barChartData'
import { IconUsersGroup , IconBuildingStore , IconBrandCashapp , IconAB2 } from '@tabler/icons-react'

import TopBox from '../components/module/TopBox';
import ChartBox from '../components/module/ChartBox';
import BarChartBox from '../components/module/BarChartBox';
import PieChartBox from '../components/module/PieChartBox';
import BigChartBox from '../components/module/BigChartBox';

const Home = () => {
    return (
        <div className='home'>
            <div className='box box1'><TopBox/></div>
            <div className='box box2'><ChartBox icon={<IconUsersGroup size={35}/>} {...usersDataChart}/></div>
            <div className='box box3'><ChartBox icon={<IconBuildingStore size={35}/>} {...productsDataChart}/></div>
            <div className='box box4'><PieChartBox/></div>
            <div className='box box5'><ChartBox icon={<IconBrandCashapp size={35}/>} {...revenueDataChart}/></div>
            <div className='box box6'><ChartBox icon={<IconAB2 size={35}/>} {...conversionDataChart}/></div>
            <div className='box box7'><BigChartBox/></div>
            <div className='box box8'><BarChartBox {...visitDataBoxChart} /></div>
            <div className='box box9'><BarChartBox {...revenueDataBoxChart} /></div>
        </div>
    );
};

export default Home;