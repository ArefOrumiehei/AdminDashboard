import '../styles/DataTable.scss';
import PropTypes from 'prop-types'

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { IconEdit , IconTrash } from '@tabler/icons-react'
import { Link } from 'react-router-dom';

  
const DataTable = (props) => {

    const actionColumn = { field : 'action' , headerName : "Action" , width : 100 ,
        renderCell : (params) => {
            return (
                <>
                    <div className="action">
                        <Link to={`/${props.route}s/${props.route}/${params.row.id}`} className="edit"><IconEdit/></Link>
                        <div className="delete" onClick={() => deleteHandler(params.row.id)} ><IconTrash/></div>
                    </div>
                </>
            )
        }
    }

    const deleteHandler = (id) => {
        console.log(id);

        //delete item
        //axios.delete(.....)
    }
 

    return (
        <div className='dataTable'>
            <DataGrid
                className='dataGrid'
                rows={props.rows}
                columns={[...props.columns , actionColumn]}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 10,
                    },
                },
                }}
                slots={{toolbar : GridToolbar}}
                slotProps={{
                    toolbar : {
                        showQuickFilter: true,
                        quickFilterProps : {debounceMs : 500}
                    }
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                disableDensitySelector
                disableColumnFilter
                disableColumnSelector
            />    
        </div>
    );
};

DataTable.propTypes = {
    columns : PropTypes.any,
    rows : PropTypes.any,
    route : PropTypes.string,
}

export default DataTable;