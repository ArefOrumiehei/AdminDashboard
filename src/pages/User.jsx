import { useParams } from 'react-router-dom';

//Data
import {singleUserData} from '../js/singleData'

//Components
import Single from "../components/Single";


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
        return <p>The desired user was not found. :(</p>;
    }
};

export default User;