import { List, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addOneSubscribe } from '../../redux/actions/subscribeAC';



function QuickSearchItem({ location, avatar, title, description, url, key, id }) {

  const dispatch = useDispatch()

  const addSubscribe = (obj) => {
    const data = {
      Picture: obj.avatar.props.src,
      Url: obj.url,
      Name: obj.title.props.children,
      Startdatetime: obj.description,
      location: obj.location
    }
    dispatch(addOneSubscribe(data))
  }

  return (
    <>
      {id ?
        <List.Item >
          <List.Item.Meta
            id={id}
            key={key}
            avatar={<Avatar src={avatar} />}
            title={<a href={url}>{title}</a>}
            description={description}
          />
          <Button onClick={() => addSubscribe({ avatar, url, title, description, location })} on type="primary" shape="circle">+</Button>
        </List.Item>
        :
        <p>Download</p>
      }
    </>
  )
}

export default QuickSearchItem;

