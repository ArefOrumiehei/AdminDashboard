//Data
import { usersData } from "../../js/usersData";

//Styles
import '../../styles/TopBox.scss'


const TopBox = () => {
    return (
        <div className='topBox'>
            <h1>Top Deals</h1>
            <div className="list">
                {usersData.map((user) => (
                    <div className="listItem" key={user.id}>
                        <div className="user">
                            <img src={user.img} alt="User Photo" />
                            <div className="userTexts">
                                <span className="username">{user.username}</span>
                                <span className="email">{user.email}</span>
                            </div>
                        </div>
                        <span className="amount">{user.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBox;