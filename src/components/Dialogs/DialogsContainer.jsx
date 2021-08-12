import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { sendMessage, updateNewMessageBody } from '../../redux/message-reduser'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

export default compose(
    connect(mapStateToProps, { sendMessage, updateNewMessageBody, }),
    withAuthRedirect
)(Dialogs)