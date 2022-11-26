import './cataloguePage.module.css'
import styles from './cataloguePage.module.css'
import { ReactComponent as ElectronicsIcon } from '../../assets/svg/categories/electronics.svg'
import { ReactComponent as ChemIcon } from '../../assets/svg/categories/chem.svg'
import { useState } from 'react'
import catalogueList from './catalogue.json'
/*
<ChemIcon className={styles.svg_category} />
<ElectronicsIcon className={styles.svg_category} />
*/

//{
    // "smartphones and gadgets": ["smartphones", "button phones", "smart watch"],
    // "laptops and tablets": ["laptops", "laptop accessories", "gaming", "tablets"]
//}

const CataloguePage = () => {
   //// let navigate = useNavigate();

    const [subcategory, setSubcategory] = useState(null)

    const onSelection = category => {
        if(category === 'electronics') {
            setSubcategory(catalogueList.electronics)
        } else if(category === 'chemistry') {
            setSubcategory(catalogueList.chemistry)
        } else {
            setSubcategory(null)
        }
        
    } 

    return (
        <div className={styles.catalogue_container}>
            <div className={`${styles.categories} ${styles.regular_border}`}>
                <h2>All categories</h2>
                <ul>
                    <li onClick={e=>onSelection('electronics')}>Electro</li>
                    <li onClick={e=>onSelection('chemistry')}>Chem</li>
                    <li onClick={e=>console.log('el')}>Furniture</li>
                </ul>
            </div>
            <div className={styles.sub_categories}>
                {subcategory === null ? 
                <h2>Choose a category</h2> 
                :
                subcategory.map(category => (
                    <>
                    <h2>{category.name}</h2>
                    {category.subtypes.map(type => (<p>{type}</p>))}
                    </>
                ))}
            </div>
        </div>
    )
}

export default CataloguePage