import style from './SignUp.module.css'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styleContainer from '../Container/container.module.css'
import { useHistory } from "react-router-dom";
import { getFormUserData } from '../../redux/actions/userAC';

function SignUp() {
    const dispatch = useDispatch()
    const history = useHistory();

    const selectCity = useRef(null)

    const [inputUser, setInputUser] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputPhone, setInputPhone] = useState('')
    const user = useSelector(state => state.user.user)


    const inputHandlerName = (event) => {
        setInputUser(event.target.value)
    }
    const inputHandlerEmail = (event) => {
        setInputEmail(event.target.value)
    }
    const inputHandlerPassword = (event) => {
        setInputPassword(event.target.value)
    }
    const inputHandlerPhone = (event) => {
        setInputPhone(event.target.value)
    }

    const HomeButton = () => {
        history.push("/");
    }
    

    const submitHandler = (event) => {
        event.preventDefault()
        const city = selectCity.current.value
        dispatch(getFormUserData(inputUser, inputEmail, inputPassword, city, inputPhone))
        setInputUser('')
        setInputEmail('')
        setInputPassword('')
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
        HomeButton()
      }
    },[user]);


    return (
        <>
            <div className={styleContainer.container + ' ' + style.containerSignUp}>
                <div className={style.wrapperEntranceUser}>
                    <div className={style.HeaderformTop}>
                        Account registration
                    </div>
                    <form onSubmit={submitHandler} className={style.Headerform} action="">
                        <input required onChange={inputHandlerName} className={style.inputHeaderForm} type="text" name="name" placeholder="Введите имя" />
                        <input required onChange={inputHandlerEmail} className={style.inputHeaderForm} maxLength="30" type="email" name="email" placeholder="Введите email" />
                        <input required onChange={inputHandlerPassword} className={style.inputHeaderForm} minLength="8" maxLength="15" type="password" name="password" placeholder="Введите password" />
                        <input required onChange={inputHandlerPhone} className={style.inputHeaderForm} type="tel" name="phone" placeholder="+7(___)___-__-__" maxLength="30" />
                        <select className={style.inputHeaderForm} ref={selectCity} name="select">
                            <option>Москва</option>
                            <option>Санкт-Петербург</option>
                            <option>Тверь</option>
                        </select>
                        <button className={style.HeaderFormButton} type="submit">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
