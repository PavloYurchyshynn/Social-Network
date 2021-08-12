import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <MyPostsContainer />
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    </div>
  )
}

export default Profile;