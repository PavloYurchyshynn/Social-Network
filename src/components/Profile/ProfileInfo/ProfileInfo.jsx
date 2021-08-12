import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
      </div> */}
      <div className={s.description_block}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        <div>Привет я: {props.profile.fullName} </div>
        <div>Про меня: {props.profile.aboutMe} </div>
        <div>Контакты:</div>
        <div>vk: {props.profile.contacts.vk}</div>
        <div>twitter: {props.profile.contacts.twitter}</div>
        <div>instagram: {props.profile.contacts.instagram}</div>
        <div>github: {props.profile.contacts.github}</div>
      </div>
    </div>
  )
}

export default ProfileInfo;