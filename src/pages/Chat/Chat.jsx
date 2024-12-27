import LeftSideBar from '../../components/LeftSidebar/LeftSideBar';
import ChatBox from '../../components/ChatBox/ChatBox'
import './Chat.css';
import RightSideBar from '../../components/RightSidebar/RightSideBar';

function Chat() {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSideBar/>
      <ChatBox/>
      <RightSideBar/>
      </div>
    </div>
  )
}

export default Chat