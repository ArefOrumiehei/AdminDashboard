import { useState } from 'react';

//Styles
import '../styles/Products.scss'

//Components
import DataTable from '../components/DataTable';
import Add from '../components/Add';

//Data
import { productsData } from '../js/productsData'

//Icons
import { IconCircleCheck, IconCircleX, IconFilePlus } from '@tabler/icons-react';


const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field : 'img' , headerName : "Image" , width : 80 ,
        renderCell : (params) => {
            return <img src={params.row.img || '' } alt="Avatar Image" />
        }
    },
    { field: 'title', headerName: 'Title', width: 80, editable: true, type : 'string' },
    { field: 'color', headerName: 'Color', width: 120, editable: true, type : 'string' },
    { field : 'price' , headerName : 'Price' , width : 140 , type : 'string'},
    { field : 'producer' , headerName : 'Producer' , width : 140 , type : 'string'},
    { field : 'createdAt' , headerName : 'Craeted At' , width : 120 , type : 'string'},
    { field : 'inStock' , headerName : 'In Stock' , width : 100 , type : 'boolean' ,
    renderCell : (params) => {
            return params.row.inStock ? <span className='true'><IconCircleCheck/></span> : <span className='false'><IconCircleX/></span>
        }
    },
];

const Products = () => {
    const [open , setOpen] = useState(false)

    return (
        <div className='products'>
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}><IconFilePlus size={24}/>Add new Product</button>
            </div>
            <DataTable route='product' columns={columns} rows={productsData} />
            {open && <Add title='product' columns={columns} open={open} setOpen={setOpen} />}
        </div>
    );
};

export default Products;