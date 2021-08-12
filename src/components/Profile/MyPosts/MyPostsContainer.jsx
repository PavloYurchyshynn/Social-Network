import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profile-reduser';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  }
}

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(MyPosts)

export default MyPostsContainer