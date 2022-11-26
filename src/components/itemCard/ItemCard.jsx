import LazyImage from '../lazyImage/LazyImage'
import styles from './itemCard.module.css'


const ItemCard = ({ item, index }) => {
    
    return (
        <div className={styles.item_card}>
            <div className={styles.image_wrapper}>
                <LazyImage width='50%' src={item.image[0]} />
            </div>
            <div className={styles.info_wrapper}>
                <div className={styles.item_name}><h3>{item.name}</h3></div>
                <div className={styles.item_category}><p>{item.category}</p></div>
                <div className={styles.item_price}><p>{item.price} ₸</p></div> 
            </div>
            
        </div>
    )
}
/*
category
: 
"Аудио"
id
: 
756
image
: 
['https://static.shop.kz/upload/iblock/b8d/cn4ac39bvax3b39nohbk42519pgvyai6/0000165741.jpg']
is_favorite
: 
false
model
: 
"SB-2150A"
name
: 
"Саундбар Sven SB-2150A , Black"
price
: 
59900
producer
: 
"Sven"
*/
export default ItemCard
