// import style from './SignIn.module.css'
import SignUp from '../SignUp/SignUp.module.css'
import styleContainer from '../Container/container.module.css'

import { useEffect, useState } from 'react'
import { getFormUserDataAuth } from '../../redux/actions/userAC';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SignIn() {
    const dispatch = useDispatch()
    const history = useHistory();
    const HomeButton = () => {
      history.push("/");
  }
  const user = useSelector(state => state.user.user)


    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')


    const inputHandlerEmail = (event) => {
        setInputEmail(event.target.value)
    }
    const inputHandlerPassword = (event) => {
        setInputPassword(event.target.value)
    }
    useEffect(()=> {
      if(user.id) {
        localStorage.setItem('id', user.id)
        localStorage.setItem('Name', user.Name)
        localStorage.setItem('email', user.email)
        localStorage.setItem('City', user.City)
        localStorage.setItem('phone', user.phone)
        localStorage.setItem('photo', user.Userphoto)
        localStorage.setItem('password', user.password)
        // window.location.replace('http://localhost:3000/')
        HomeButton();
      }
    },[user]);

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(getFormUserDataAuth(inputEmail, inputPassword))
        // HomeButton();
    }

    return (
        <>
            <div className={styleContainer.container + ' ' + SignUp.containerSignUp}>
                <div className={SignUp.wrapperEntranceUser}>
                    <div className={SignUp.HeaderformTop}>
                        Authorization
                    </div>
                    <form className={SignUp.Headerform} onSubmit={submitHandler} action="">
                        <input required onChange={inputHandlerEmail} maxLength="30" className={SignUp.inputHeaderForm} type="email" name="email" placeholder="Введите email" />
                        <input required onChange={inputHandlerPassword} maxLength="30" className={SignUp.inputHeaderForm} type="password" name="password" placeholder="Password" />
                        <button className={SignUp.HeaderFormButton} type="submit">Войти</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn
