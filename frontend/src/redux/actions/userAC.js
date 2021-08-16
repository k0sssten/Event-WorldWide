import { ADD_USER, ADD_ID, DELETE_USER, DELETE_ID_USER, ADD_USER_AVATAR } from '../types/userTypes';
import axios from 'axios';

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    };
};

export const addID = (id) => {
    return {
        type: ADD_ID,
        payload: id,
    };
};

export const deleteUser = (clearUser) => {
    return {
        type: DELETE_USER,
        payload: clearUser,
    };
};

export const deleteIdUser = (clearIdUser) => {
    return {
        type: DELETE_ID_USER,
        payload: clearIdUser,
    };
}

export const addUserAvatar = (avatar) => {
    return {
        type: ADD_USER_AVATAR,
        payload: avatar,
    };
}



export const getFormUserData = (userName, email, password, city, phone) => async (dispatch) => {
    const response = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            userName,
            email,
            password,
            city,
            phone
        })
    })
    const data = await response.json()
    // console.log('user --->>>', data.Name)

    dispatch(addUser(data))
    // dispatch(addID(data.id))
}

export const getFormUserDataAuth = (email, password) => async (dispatch) => {
    const response = await fetch('http://localhost:3001/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await response.json();
    dispatch(addUser(data));
    // dispatch(addID(data.id));
};

export const saveUserDataPersonalArea = (userInfo) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      userInfo
    }),
  });
  const newUser = await response.json();
  console.log(newUser)
  localStorage.id = newUser.id
    localStorage.Name = newUser.Name
    localStorage.email = newUser.email
    localStorage.City = newUser.City
    localStorage.phone = newUser.Userphonenumber
    
    localStorage.photo = newUser.Userphoto
    localStorage.password = newUser.password
  dispatch(addUser(newUser));
};



export const logout = (clearUser) => async (dispatch) => {
    const response = await fetch('http://localhost:3001/api/logout', {
        credentials: 'include',
    })
    dispatch(deleteUser(clearUser));
    dispatch(deleteIdUser(clearUser));
    const status = await response.json();
    console.log('server status --->>>', status)
    dispatch(deleteUser(clearUser));
}


export default { addUser, getFormUserData, logout };
