import type { NextPage } from 'next'
import { useSelector } from 'react-redux';
import Category from '../components/Category/Category';
import NewCategory from '../components/Category/NewCategory';
import PieChart from '../components/PieChart'
import styles from '../styles/Home.module.scss'
import { addNewCategory } from '../redux/slices/categoriesSlice';
import { CategoryType } from '../redux/utils/types';
const Home: NextPage = () => {
  const categories = useSelector(state => state.categories )
  return (
    <div className="container">
      <section>
        <div className={styles.categories}>
          {categories.map((c: CategoryType) => <Category id={c.id} categoryName={c.categoryName} bgColor={c.bgColor} icon={c.icon} sum={c.sum} key={c.id}/>)}
          
          <div ><NewCategory /></div>
        </div>
        <div className={styles.chartSection}>
          <PieChart data={categories} width={300} height={300}  fontSize={16}/>
          
        </div>
      </section>
    </div>
  )
}

export default Home
