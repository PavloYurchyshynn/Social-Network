import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOrmoaHS_UlnPwesP0pWb5gdUeCtJGrcwzw&usqp=CAU' />
        {props.message}
      </div>
      <span>like</span> {props.likesCount}
    </div>
  )
}

export default Post;