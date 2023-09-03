//Styles
import '../styles/Navbar.scss'

//Icons
import { IconBrandReact , IconSearch , IconApps , IconBorderCorners , IconSettings , IconBell , IconUserCircle } from '@tabler/icons-react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <IconBrandReact className='react' size={38} />
                <span>Arefadmin</span>
            </div>
            <div className='icons'>
                <IconSearch className='icon' />
                <IconApps className='icon' />
                <IconBorderCorners className='icon' />
                <div className='notification'>
                    <IconBell/>
                    <span>1</span>
                </div>
                <div className="user">
                    <IconUserCircle size={32}/>
                    <span>Aref</span>
                </div>
                <IconSettings />
            </div>
        </div>
    );
};

export default Navbar;