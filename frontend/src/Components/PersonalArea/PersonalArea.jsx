import style from './PersonalArea.module.css';
import styleContainer from '../Container/container.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserDataPersonalArea } from '../../redux/actions/userAC';
import { useRef, useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

// const ImageThumb = ({ image, avatarUser }) => {
//     return <img ref={avatarUser} className={style.userAvatar} src={URL.createObjectURL(image)} alt={image.name} />;
// };

function PersonalArea() {
  const [avatar, setAvatar] = useState(localStorage.photo);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log(localStorage);

  const [buttonUpdate, setButtonUpdate] = useState(false);
  const [buttonEdit, setButtonEdit] = useState(true);
  const [editName, setEditName] = useState(localStorage.Name);
  const [editEmail, setEditEmail] = useState(localStorage.email);
  const [editPassword, setEditPassword] = useState(localStorage.password);
  const [editPhone, setEditPhone] = useState(localStorage.phone);
  const [editCountry, setEditCountry] = useState(localStorage.City);
  const [showHidePassword, setShowHidePassword] = useState(false);

  const divSelectCountry = useRef(null);
  const editNameUser = useRef(null);
  const editEmailUser = useRef(null);
  const editPasswordUser = useRef(null);
  const editPhoneUser = useRef(null);

  const editUserData = () => {
    editNameUser.current.removeAttribute('readonly');
    editEmailUser.current.removeAttribute('readonly');
    editPasswordUser.current.removeAttribute('readonly');
    editPhoneUser.current.removeAttribute('readonly');

    editNameUser.current.classList.add(style.showEdit);
    editEmailUser.current.classList.add(style.showEdit);
    editPasswordUser.current.classList.add(style.showEdit);
    editPhoneUser.current.classList.add(style.showEdit);
    setButtonUpdate(true);
    setButtonEdit(false);
  };

  const saveUserData = () => {
    editNameUser.current.setAttribute('readonly', true);
    editEmailUser.current.setAttribute('readonly', true);
    editPasswordUser.current.setAttribute('readonly', true);
    editPhoneUser.current.setAttribute('readonly', true);

    editNameUser.current.classList.remove(style.showEdit);
    editEmailUser.current.classList.remove(style.showEdit);
    editPasswordUser.current.classList.remove(style.showEdit);
    editPhoneUser.current.classList.remove(style.showEdit);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const formDataEdit = { ...formData };
    dispatch(saveUserDataPersonalArea(formDataEdit));

    setButtonUpdate(false);
    setButtonEdit(true);
  };

  const showPasswordUser = useRef(null);

  const showPassword = () => {
    if (showHidePassword === false) {
      editPasswordUser.current.type = 'text';
      showPasswordUser.current.classList.add(style.showPassword);
      setShowHidePassword(true);
    } else if (showHidePassword === true) {
      editPasswordUser.current.type = 'password';
      showPasswordUser.current.classList.remove(style.showPassword);
      setShowHidePassword(false);
    }
  };
  useEffect(() => {
    // localStorage.setItem('id', user.id);
    // localStorage.setItem('Name', user.Name);
    // localStorage.setItem('email', user.email);
    // localStorage.setItem('City', user.City);
    // localStorage.setItem('phone', user.Userphonenumber);
    // localStorage.setItem('photo', user.Userphoto);
    // localStorage.setItem('password', user.password);
  }, [user]);

  function MyDropzone() {
    const onDrop = useCallback((acceptedFiles) => {
      const formData = new FormData();
      formData.append('file', acceptedFiles[0]);
      formData.append('email', localStorage.email);
      axios.post('http://localhost:3001/api/uploadimg', formData).then((res) => {
        const curUser = res.data;
        localStorage.photo = curUser.Userphoto;
        setAvatar(curUser.Userphoto);
      });
    }, []);
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    const img = localStorage.photo;
    console.log(img)
    return (
      <div className={style.personalData_avatar} {...getRootProps()}>
          {/* <img src={localStorage.photo} alt="" /> */}
          {img ? (
        <div className={style.personalData_imgBg} style={{backgroundImage: `url(${ img })`}}> 
            <div className={style.personalDat_updateImg} >
              <div className={style.fon}></div>
              <div class={style.updateImg}>
                <input {...getInputProps()} onClick={'none'} class={style.personalDat_FileInput} name="imgUpload" type="file" />
              </div>
            </div>
            </div>
          ) : (
            <div className={style.personalData_imgBg}> 
            <div className={style.personalDat_updateImg}>
              <div className={style.fon}></div>
              <div class={style.updateImg}>
                <input {...getInputProps()} onClick={'none'} class={style.personalDat_FileInput} name="imgUpload" type="file" />
              </div>
            </div>
            </div>
          )}
        
        <div className={style.personalData_name}>{localStorage.Name}</div>
        <button className={style.submitImg}>Загрузить img</button>
      </div>
    );
  }

  return (
    <>
      <section className={style.sectionPersonalArea}>
        <div className={styleContainer.container + ' ' + style.containerPersonalData + ' ' + style.containerPersonalData2}>
          <h2 className={style.personalAreaTitle}>Personal area</h2>
          <div className={style.personalAreaContent}>
            <MyDropzone />

            <form onSubmit={submitHandler} className={style.formPersonalData_generalInformation} action="">
              <div className={style.personalDataItem + ' ' + style.blockPersonalData_country}>
                <label className={style.formPersonalData_labelCountry + ' ' + style.labelFormPersonalData}>
                  <span className={style.formPersonalDataText}>City</span>
                </label>
                <input
                  ref={divSelectCountry}
                  className={style.blockPersonalDataText}
                  type="text"
                  name="sity"
                  readOnly="readonly"
                  onChange={(event) => setEditCountry(event.target.value)}
                  value={editCountry}
                />
              </div>
              <div className={style.personalDataItem + ' ' + style.wrapperPersonalData_firsName}>
                <label className={style.formPersonalData_labelFirsName + ' ' + style.labelFormPersonalData} htmlFor="firstName">
                  <span className={style.formPersonalDataText}>First Name</span>
                </label>
                <input
                  ref={editNameUser}
                  className={style.blockPersonalDataText}
                  type="text"
                  name="name"
                  readOnly="readonly"
                  onChange={(event) => setEditName(event.target.value)}
                  value={editName}
                />
              </div>
              <div className={style.personalDataItem + ' ' + style.wrapperPersonalData_email}>
                <label className={style.formPersonalData_labelEmail + ' ' + style.labelFormPersonalData} htmlFor="email">
                  <span className={style.formPersonalDataText}>Email</span>
                </label>
                <input
                  ref={editEmailUser}
                  className={style.blockPersonalDataText}
                  type="email"
                  name="email"
                  readOnly="readonly"
                  onChange={(event) => setEditEmail(event.target.value)}
                  value={editEmail}
                />
              </div>
              <div className={style.personalDataItem + ' ' + style.wrapperPersonalData_password}>
                <label className={style.formPersonalData_labelEmail + ' ' + style.labelFormPersonalData} htmlFor="email">
                  <span className={style.formPersonalDataText}>Password</span>
                </label>
                <div className={style.wrapperPassword}>
                  <span ref={showPasswordUser} onClick={() => showPassword()} className={style.hidePassword}></span>
                  <input
                    ref={editPasswordUser}
                    className={style.blockPersonalDataText}
                    type="password"
                    name="password"
                    readOnly="readonly"
                    onChange={(event) => setEditPassword(event.target.value)}
                    value={editPassword}
                  />
                </div>
              </div>
              <div className={style.personalDataItem + ' ' + style.wrapperPersonalData_phone}>
                <label className={style.formPersonalData_labelphone + ' ' + style.labelFormPersonalData} htmlFor="phone">
                  <span className={style.formPersonalDataText}>Phone</span>
                </label>
                <input
                  ref={editPhoneUser}
                  className={style.blockPersonalDataText}
                  type="tel"
                  name="phone"
                  readOnly="readonly"
                  onChange={(event) => setEditPhone(event.target.value)}
                  value={editPhone}
                />
              </div>
              {buttonUpdate && (
                <button onClick={() => saveUserData()} className={style.blockPersonalDataSubmit} type="submit">
                  Обновить
                </button>
              )}
              {buttonEdit && (
                <span onClick={() => editUserData()} className={style.blockPersonalDataSubmit + ' ' + style.blockPersonalDataEdit}>
                  Редактировать
                </span>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default PersonalArea;
