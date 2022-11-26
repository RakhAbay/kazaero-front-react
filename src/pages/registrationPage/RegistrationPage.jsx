import { useState } from 'react'
import axios from 'axios'
import { userRegistration } from '../../api/api'
import styles from './registrationPage.module.css'
import handsImage from '../../assets/image/hands.png'
import { Link, useNavigate } from 'react-router-dom'

const RegistrationPage = () => {
    const [email, setEmail] = useState()
    const [firstName, setFirstName] = useState()
    const [secondName, setSecondName] = useState()
    const [password, setPassword] = useState()

    let navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault()
        let res = await userRegistration(email, firstName, secondName, password)
        console.log(res)
        if(res.status === 200) {
            navigate('/login')
        }
    }

    return (
        <div className={styles.registration_container}>
            <div className={styles.photo_container}>
                <img className={styles.photo} src={handsImage} />
            </div>
            <div className={styles.registration_form}>
                <h1>Регистрация</h1>
                <div className={styles.input_label}>
                <span>Email</span>
                </div>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className={styles.input_label}>
                <span>Имя</span>
                </div>
                <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <div className={styles.input_label}>
                <span>Фамилия</span>
                </div>
                <input type='text' value={secondName} onChange={(e) => setSecondName(e.target.value)} />
                <div className={styles.input_label}>
                <span>Пароль</span>
                </div>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className={styles.register_button} onClick={register}>Зарегистрироваться</button>
                <p>Уже есть аккаунт? <Link className={styles.link} to={'/login'}>Войти</Link></p>
            </div>
        </div>
    )
}

export default RegistrationPage
