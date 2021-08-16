import SearchEventList from '../SearchEventList/SearchEventList';
import SearchForm from '../SearchForm/SearchForm'
import styleContainer from '../Container/container.module.css';
import style from './Search.module.css'
import styleSignUp from '../SignUp/SignUp.module.css'

function SearchContainer() {

  return (
    <>
      <div className={styleContainer.container + ' ' + style.searchContainer}>
      <div class={styleSignUp.HeaderformTop}>Поиск событий</div>
        <SearchForm />
        <SearchEventList />
      </div>
    </>
  )
}

export default SearchContainer;
