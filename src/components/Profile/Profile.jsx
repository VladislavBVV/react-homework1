import { BsFillAlarmFill } from 'react-icons/bs';
import { UserProfile, Discription, Stats } from './Profile.styled';


export const Profile = ({ user }) => {
  return (
    <UserProfile>
      <Discription>
        <img src={user.avatar} alt='user avatar' className='avatar' width = "150"/>
        <p className="name">{user.username}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </Discription>

      <Stats>
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{user.stats.followers} </span>
          <BsFillAlarmFill /> 
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </Stats>
    </UserProfile>
  );
};

