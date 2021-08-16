import { List, Avatar, Button } from 'antd';
import { removeFavourite } from '../../redux/actions/favouriteAC'
import { useSelector, useDispatch } from 'react-redux';

function PersonalAreaFavouriteItem ({id, url, avatar, description, title}) {
  const dispatch = useDispatch()

  const handlerDeleter = () => {
    dispatch(removeFavourite(id))
  }

  return(
    <List.Item>
    <List.Item.Meta
      avatar={<Avatar src={avatar} />}
      title={<a href={url}>{title}</a>}
      description={description}
    />
    <Button onClick={handlerDeleter}>Удалить</Button>
  </List.Item>
  )
}

export default PersonalAreaFavouriteItem;
