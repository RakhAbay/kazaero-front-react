import { Link, useNavigate } from "react-router-dom"
import styles from './navbar.module.css'
import { ReactComponent as Icon } from '../../assets/svg/icon.svg'
import { ReactComponent as Cart } from '../../assets/svg/cart.svg'
import { ReactComponent as Favorite } from '../../assets/svg/favorite.svg'


const Navbar = ({ query, setQuery }) => {
    let navigate = useNavigate()

    const navigeteTo = (e, destination) => {
        e.preventDefault()
        if(destination==='main' && token !== null) {
            navigate(`/${destination}`)
        }
    }

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        navigate(`/login`)
    }

    let token = localStorage.getItem('token')

    return (
        <nav className={`${styles.navbar_wrapper} ${styles.regular_border}`}>
            <div className={styles.logo}>
                <div className={styles.logo_vertical}>
                    <Icon />
                </div>
            </div>
            <div className={styles.catalog}>
                <button onClick={e => navigeteTo(e, 'main')} className={styles.catalog_button}>КАТАЛОГ</button>
            </div>
            <div className={styles.searchbar}>
                <input placeholder='Поиск' value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className={styles.space} />
            <div className={styles.grey_circle_border}>
                <Cart />
            </div>
            <div className={styles.grey_circle_border}>
                <Favorite />
            </div>
            {
                token === null ? (
                    <div className={styles.login}>
                        <button onClick={e => navigeteTo(e, 'login')} className={styles.login_button}>ЛОГИН</button>
                    </div>
                ) : (
                    <div className={styles.login}>
                        <button onClick={logout} className={styles.login_button}>ВЫЙТИ</button>
                    </div>
                )


            }

            {/* <div className={styles.login}>
                <ul>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/main'>Main</Link></li>
                </ul>
            </div> */}


        </nav>
    )
}

export default Navbar
