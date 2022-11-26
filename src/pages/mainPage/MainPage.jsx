import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { itemsRetrieval } from "../../api/api"
import ItemCard from "../../components/itemCard/ItemCard"
import useDebounce from "../../hooks/useDebounce"
import styles from './mainPage.module.css'


const MainPage = ({ query }) => {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  const [sortAscending, setSortAscending] = useState(false)
  const [sortDescending, setSortDescending] = useState(false)

  let navigate = useNavigate()
  const navigateTo = (id) => {
    console.log(id)
  }

  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1)
  // No of Records to be displayed on each page   
  const [recordsPerPage, setRecordsPerPage] = useState(10)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  // Records to be displayed on the current page
  const currentRecords = filteredItems.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(filteredItems.length / recordsPerPage)
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
  //const nPages = Math.ceil(data.length / recordsPerPage)

  const [category, setCategory] = useState('all')

  useEffect(() => {
    const callApi = async () => {
      let res = await itemsRetrieval()
      setItems(res.data)
      setFilteredItems(res.data)
      console.log(res)
    }
    callApi()
  }, [])

  useDebounce(() => {
    console.log('invoked')
    if (query !== '' && items.length !== 0) {
      if(category === 'all') {
        setFilteredItems(items.filter(item => item.name.toLowerCase().includes(query.toLowerCase())))
      } else if (category === 'smartphones') {
        setFilteredItems(items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        .filter(item => item.category === 'Телефоны и гаджеты'))
      } else if (category === 'computers') {
        setFilteredItems(items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        .filter(item => item.category === 'Компьютеры'))
      } else if (category === 'audio') {
        setFilteredItems(items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        .filter(item => item.category === 'Аудио'))
      } else if (category === 'televisions') {
        setFilteredItems(items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        .filter(item => item.category === 'Телевизоры'))
      } else if (category === 'cameras') {
        setFilteredItems(items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        .filter(item => item.category === 'Камера'))
      }
      setCurrentPage(1)
    } else {
      if(category === 'all') {
        setFilteredItems(items)
      } else if (category === 'smartphones') {
        setFilteredItems(items.filter(item => item.category === 'Телефоны и гаджеты'))
      } else if (category === 'computers') {
        setFilteredItems(items.filter(item => item.category === 'Компьютеры'))
      } else if (category === 'audio') {
        setFilteredItems(items.filter(item => item.category === 'Аудио'))
      } else if (category === 'televisions') {
        setFilteredItems(items.filter(item => item.category === 'Телевизоры'))
      } else if (category === 'cameras') {
        setFilteredItems(items.filter(item => item.category === 'Камера'))
      }
      
      setCurrentPage(1)
    }
  }, [query, category], 300)//filteredItems

  return (
    <div className={styles.main_wrapper}>
      <div className={`${styles.categories_section} ${styles.regular_border}`}>
        <h2>Категорий</h2>
        <ul>
          <li onClick={e => setCategory('all')}>Все</li>
          <li onClick={e => setCategory('smartphones')}>Телефоны и гаджеты</li>
          <li onClick={e => setCategory('computers')}>Компьютеры</li>
          <li onClick={e => setCategory('audio')}>Аудио</li>
          <li onClick={e => setCategory('televisions')}>Телевизоры</li>
          <li onClick={e => setCategory('cameras')}>Камеры</li>
        </ul>
      </div>
      <div className={styles.items_section}>
        <div className={styles.sort_buttons}>
          <button className={styles.sort_button}>Дорогие</button>
          <button className={styles.sort_button}>Дешевые</button>
        </div>
        {filteredItems.length === 0 ? (
          <h2>No items</h2>
        ) : (
          <div className={styles.item_card_container}>
            {currentRecords.map((item) => (<div onClick={()=>navigateTo(item.id)}><ItemCard item={item} /></div>))}
          </div>
        )}
        <div className={styles.pages}>
          {pageNumbers.map(pgNumber => (
            <div onClick={()=>setCurrentPage(pgNumber)} className={styles.pageNumber}>{pgNumber}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainPage

  // useEffect(() => {
  //   if (query !== '') {
  //     const results = items.filter((item) => {
  //       return item.name.toLowerCase().startsWith(query.toLowerCase())
  //       // Use the toLowerCase() method to make it case-insensitive
  //     })
  //     setItems(results)
  //     console.log('query non-empty')
  //   }
  //   else {
  //     setItems([{ name: 'sdf' }, { name: 'sdf' }, { name: 'sdf' }])
  //     console.log('query empty')
  //     //setFoundUsers(USERS)
  //     // If the text field is empty, show all users
  //   }
  // }, [query])
  // if (query !== '' && items.length !== 0) {

  //   // const results = items.filter((item) => {
  //   //   return item.name.toLowerCase().startsWith(query.toLowerCase())
  //   //   // Use the toLowerCase() method to make it case-insensitive
  //   // })
  //   //setItems(results)
  //   console.log('query non-empty')
  // }

  // if (query !== '') {
  //   const results = items.filter((item) => {
  //     return item.name.toLowerCase().includes(query.toLowerCase())
  //     // Use the toLowerCase() method to make it case-insensitive
  //   })
  //   setFilteredItems(results)
  // }