import styles from "@/../styles/Navbar.module.css"



export default function Navbar() {


    return (
        <header className={styles.header}>
            <div className="container">
                <nav className="navbar d-flex justify-content-between align-items-center">
                    <div className="topBar__right d-flex justify-content-between align-items-end">
                        <div className={styles.logo__icon}>
                            <img src="/logo.webp" className={styles.logo__iconImg} alt="logo"/>
                        </div>
                        <div className={`${styles.searchBar} rounded-pill`}>
                        <svg className={styles.searchBar__icon} fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                            </svg>

                            <label>
                                <input type="search" className={styles.searchBar__box}
                                       placeholder="عبارت مورد نظرتان را جهت جستجو وارد نمایید"/>
                            </label>
                        </div>
                    </div>
                    <div className={`d-flex align-items-center gap-3`}>
                        <div className={`${styles.cart} d-flex align-items-center`}>
                            <a href="#" >
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className={styles.cart__icon}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                </svg>
                            </a>
                        </div>

                        <div className={`${styles.login} d-flex align-items-center rounded-pill`}>
                            <a href="#" >
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className={styles.login__icon}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                                </svg>
                                <span className={styles.login__text}>ورود/ثبت نام</span>
                            </a>
                        </div>


                    </div>
                </nav>

                <ul className={`d-flex align-items-center list-unstyled`}>
                    <li className={styles.menu__item}>
                        <a href="" className={styles.menu__link}>
                            ارایشی و بهداشتی
                        </a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="" className={styles.menu__link}>
                            مکمل غذایی و کمک درمانی
                        </a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="" className={styles.menu__link}>
                            مکمل ورزشی
                        </a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="" className={styles.menu__link}>
                            مادر و کودک
                        </a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="" className={styles.menu__link}>
                            تجهزات پزشکی
                        </a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="" className={styles.menu__link}>
                            داروحانه مرکزی جمالزاده
                        </a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="" className={styles.menu__link}>
                            مجله داروکده
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

