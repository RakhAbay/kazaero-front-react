import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../../api/api'
import styles from './loginPage.module.css'
import handsImage from '../../assets/image/hands.png'


const LoginPage = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    let navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        let res = await userLogin(email, password)
        console.log(res)
        let data = res.data
        let token = data.token
        let userId = data.user_id
        let username = data.username
        localStorage.setItem('token', token)
        if(res.status === 200) {
            navigate('/main')
        }
    }

    return (
        <div className={styles.registration_container}>
            <div className={styles.photo_container}>
                <img className={styles.photo} src={handsImage} />
            </div>
            <div className={styles.registration_form}>
                <h1>Логин</h1>
                <div className={styles.input_label}>
                <span>Email</span>
                </div>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className={styles.input_label}>
                <span>Пароль</span>
                </div>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className={styles.register_button} onClick={login}>Войти</button>
                <p>Не имеете аккаунта? <Link className={styles.link} to={'/registration'}>Зарегистрироваться</Link></p>
            </div>
        </div>
    )
}

export default LoginPage
