import { useParams } from 'react-router-dom';
import {singleUserData} from '../js/singleData'
import Single from "../components/Single";

import "../styles/User.scss";

const User = () => {
    const {id} = useParams()

    const userData = singleUserData.find((item) => item.id === parseInt(id))

    if (userData) {
        return (
          <div className='user'>
            <Single key={userData.id} {...userData} />
          </div>
        );
    } else {
        return <p>محصول مورد نظر یافت نشد</p>;
    }
};

export default User;