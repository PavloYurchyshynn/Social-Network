import s from './Post.module.css';
import userPhoto from '../../../../assets/images/user.png'

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
      <img src={userPhoto} />
        {props.message}
      </div>
      <span>like</span> {props.likesCount}
    </div>
  )
}

export default Post;