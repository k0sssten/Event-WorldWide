import QuickSearchForm from "../QuickSearchForm/QuickSearchForm";
import QuickSearchEventList from "../QuickSearchEventList/QuickSearchEventList";
import styleContainer from '../Container/container.module.css';
import styleSignUp from '../SignUp/SignUp.module.css'
import style from './QuickSearchContainer.module.css'

function QuickSearchContainer() {

  return (
    <>
      <div className={styleContainer.container + ' ' + style.QuickSearchContainer}>
        <div class={styleSignUp.HeaderformTop}>Поиск событий</div>
        <QuickSearchForm />
        <div className={style.QuickSearchEventList}>
          <QuickSearchEventList />
        </div>
      </div>
    </>
  )
}

export default QuickSearchContainer;
