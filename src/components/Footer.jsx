import '../styles/Footer.scss'

import {  IconCopyright } from '@tabler/icons-react';


const Footer = () => {
    return (
        <div className='footer'>
            <span>Arefadmin</span>
            <span><IconCopyright size={15}/>Aref Dev Admin Dashboard</span>
        </div>
    );
};

export default Footer;