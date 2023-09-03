import react, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

//Styles
import '../styles/Add.scss';

//Icons
import { IconX } from '@tabler/icons-react';


const Add = (props) => {

    useEffect(() => {
        document.body.style.overflowY = 'hidden'

        return () => {
            document.body.style.overflowY = 'auto'
        }
    })

    const submitHandler = (e) => {
        e.preventDefault()

        //add item 
        // axios.post(....)
    }

    return (
        <div className='add' onBlur={() => props.setOpen(false)}>
            <div className="modal">
                <span onClick={() => props.setOpen(false)} className="close"><IconX/></span>
                <h1 className='title'>Add new {props.title}</h1>
                <form onSubmit={submitHandler}>
                    {props.columns
                        .filter((item) => item.field !== 'id' && item.field !== 'avatar')
                        .map((column) => (
                        <react.Fragment key={v4()}>
                            <div className="item">
                                <label htmlFor="">{column.headerName}</label>
                                <input type={column.type} placeholder={column.field}></input>
                            </div>
                        </react.Fragment>
                    ))}
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

Add.propTypes = {
    title : PropTypes.string,
    columns : PropTypes.any,
    setOpen : PropTypes.any,
    open : PropTypes.bool,
}

export default Add;