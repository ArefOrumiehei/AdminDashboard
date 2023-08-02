import {IconHome ,
        IconUsers ,
        IconUser ,
        IconShoppingCart , 
        IconClipboardText ,
        IconArticle ,
        IconCalendar ,
        IconBorderAll ,
        IconNotes ,
        IconForms ,
        IconSettings ,
        IconDatabaseImport ,
        IconChartBar ,
        IconFileAnalytics} from '@tabler/icons-react'

import '../styles/Menu.scss'
import Item from './Item';

const Menu = () => {
    return (
        <div className='menu'>
            <div className="item">
                <span className="title">Main</span>
                    <Item url='/' icon={<IconHome/>} title='Home' />
                    <Item url='/' icon={<IconUser/>} title='Profile' />
            </div>
            <div className="item">
                <span className="title">Lists</span>
                <Item url='/users' icon={<IconUsers/>} title='Users'/>
                <Item url='/products' icon={<IconShoppingCart/>} title='Products'/>
                <Item url='/' icon={<IconClipboardText/>} title='Orders'/>
                <Item url='/' icon={<IconArticle/>} title='Posts'/>
            </div>
            <div className="item">
                <span className="title">General</span>
                <Item url='/' icon={<IconBorderAll/>} title='Elements'/>
                <Item url='/' icon={<IconNotes/>} title='Notes'/>
                <Item url='/' icon={<IconForms/>} title='Forms'/>
                <Item url='/' icon={<IconCalendar/>} title='Calendar'/>
            </div>
            <div className="item">
                <span className="title">Mintenance</span>
                <Item url='/' icon={<IconSettings/>} title='Settings'/>
                <Item url='/' icon={<IconDatabaseImport/>} title='Backups'/>
            </div>
            <div className="item">
                <span className="title">Analytics</span>
                <Item url='/' icon={<IconChartBar/>} title='Charts'/>
                <Item url='/' icon={<IconFileAnalytics/>} title='Logs'/>
            </div>
        </div>
    );
};

export default Menu;