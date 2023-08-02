import '../styles/Users.scss'

import DataTable from '../components/DataTable';
import { usersDataTable } from '../js/usersData'
import { IconUserPlus , IconCircleCheck , IconCircleX } from '@tabler/icons-react'
import Add from '../components/Add';

import { useState } from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field : 'avatar' , headerName : "Avatar" , width : 80 ,
        renderCell : (params) => {
            return <img src={params.row.img || '' } alt="Avatar Image" />
        }
    },
    { field: 'firstName', headerName: 'First name', width: 80, editable: true, type : 'string' },
    { field: 'lastName', headerName: 'Last name', width: 120, editable: true, type : 'string' },
    { field : 'phone' , headerName : 'Phone' , width : 140 , type : 'string'},
    { field : 'email' , headerName : 'email' , width : 140 , type : 'string'},
    // { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 120, type : 'string' ,
    // valueGetter: (params) =>
    // `${params.row.firstName || ''} ${params.row.lastName || ''}`, 
    // },
    { field : 'createdAt' , headerName : 'Craeted At' , width : 120 , type : 'string'},
    { field : 'verified' , headerName : 'Verified' , width : 100 , type : 'boolean' ,
    renderCell : (params) => {
            return params.row.verified ? <span className='true'><IconCircleCheck/></span> : <span className='false'><IconCircleX/></span>
        }
    },
];

 

const Users = () => {

    const [open , setOpen] = useState(false)
    

    return (
        <div className='users'>
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}><IconUserPlus size={16}/>Add new user</button>
            </div>
            <DataTable route='user' columns={columns} rows={usersDataTable} />
            {open && <Add title='User' columns={columns} setOpen={setOpen} />}
        </div>
    );
};

export default Users;