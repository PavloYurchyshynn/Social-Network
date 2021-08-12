import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.description_block}>
        <div>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className={s.userPhoto} />
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
        <div>
          <div>Привет я: {props.profile.fullName} </div>
          <div>Про меня: {props.profile.aboutMe} </div>
          <div>Контакты:</div>
          <div>vk: {props.profile.contacts.vk}</div>
          <div>twitter: {props.profile.contacts.twitter}</div>
          <div>instagram: {props.profile.contacts.instagram}</div>
          <div>github: {props.profile.contacts.github}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;