import cn from 'classnames'
import { cleanText } from '../../../../shared/lib/profanityFilter'

const MessageItem = ({ isUser = true, message }) => {
  const classes = cn({
    'p-3 w-50 mb-3 mx-3 text-break': true,
    'bg-light align-self-end': isUser,
    'bg-light align-self-start': !isUser,
  })

  return (
    <div className={classes}>
      <p className='mb-2 fw-bold'>{message.username}</p>
      <p>{cleanText(message.body)}</p>
    </div>
  )
}

export default MessageItem
