import type { NextPage } from 'next'
import { useSelector } from 'react-redux';
import Category from '../components/Category/Category';
import NewCategory from '../components/Category/NewCategory';
import PieChart from '../components/PieChart'
import styles from '../styles/Home.module.scss'
import { addNewCategory } from '../redux/slices/categoriesSlice';
import { CategoryType } from '../redux/utils/types';
import {CategoryApi} from "../api";
import {useRouter} from "next/router";

//@ts-ignore
const Home: NextPage = ({categories}) => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  }

  return (
    <div className="container">
      <section>
        <div className={styles.categories}>
          {categories.map((c: CategoryType) => <Category id={c.id} categoryName={c.categoryName} color={c.color} logo={c.logo} sum={c.sum} refreshData={refreshData} key={c.id}/>)}
          
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

export const getServerSideProps = async () => {
  try {
    const categories = await CategoryApi.getAllWithSum();
    return {
      props: { categories }

    }
  } catch (error){
    return {
      props: {
        categories: [
          {
            id: 1,
            categoryName: "Семья",
            color: "#07c312",
            logo: "faUsers",
            sum: 1000
          },
          {
            id: 2,
              categoryName: "Кафе",
              color: "#3023b9c0",
              logo: "faUtensils",
              sum: 400
          },
          {
            id: 3,
              categoryName: "Досуг",
              color: "#ff0494c0",
              logo: "faFilm",
              sum: 0
          },
          {
            id: 4,
              categoryName: "Продукты",
              color: "#8a23b9c0",
              logo: "faShoppingBasket",
              sum: 300
          },
          {
            id: 5,
              categoryName: "Транспорт",
              color: "#dc9a13c0",
              logo: "faBusAlt",
              sum: 100
          },
          {
            id: 6,
              categoryName: "Здоровье",
              color: "#0d9027",
              logo: "faHeartbeat",
              sum: 800
          },
          {
            id: 7,
              categoryName: "Покупки",
              color: "#0d6e90",
              logo: "faShoppingBag",
              sum: 0
          },
          {
            id: 8,
              categoryName: "Подарки",
              color: "#e22b38",
              logo: "faGift",
              sum: 0
          }
        ]
      }
    }
  }

}