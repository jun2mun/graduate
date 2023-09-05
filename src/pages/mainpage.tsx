import {Link} from 'react-router-dom';
import styles from './mainpage.module.css';

export const Mainpage = () =>{

    return (
        <>
            <div className={styles.layout}>
                <div className={styles.header}>
                    <img src = '/icons/video-camera.svg' className={styles.header_img}/>
                    <p>카메라 ON</p>
                </div>
                <div className={styles.main}>
                    <Link to='/dashboard'>
                        <button className={styles.main_button}>
                            <img src = '/icons/logo.svg' className={styles.main_img}/>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}