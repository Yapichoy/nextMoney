import type { NextPage } from 'next'
import { useSelector, useDispatch  } from 'react-redux';
import Category from '../components/Category/Category';
import NewCategory from '../components/Category/NewCategory';
import PieChart from '../components/PieChart'
import styles from '../styles/Home.module.scss'
import { CategoryState, addNewCategory } from '../redux/slices/categoriesSlice';
const Home: NextPage = () => {
  const categories = useSelector(state => state.categories )
  const dispatch = useDispatch();
  return (
    <div className="container">
      <section>
        <div className={styles.categories}>
          {categories.map((c: CategoryState) => <Category label={c.categoryName} bgColor={c.bgColor} icon={c.icon} sum={c.sum} key={c.id}/>)}
          
          <div onClick={() => dispatch(addNewCategory())}><NewCategory /></div>
          
        </div>
        <div className={styles.chartSection}>
          <PieChart data={[
                   { x: 1, y: 1000, color: '#07c312' }, { x: 2, y: 400, color: '#3023b9c0' }, { x: 3, y: 3000, color: '#8a23b9c0' }, { x: 4, y: 100, color: '#dc9a13c0' }, { x: 5, y: 800, color: '#0d9027' }, 
                 ]} width={300} height={300} sum={5300} fontSize={16}/>
          
        </div>
      </section>
    </div>
  )
}

export default Home
