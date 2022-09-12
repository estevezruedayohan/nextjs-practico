import React from "react";
import Image from 'next/image';
// import 'Styles/ChangePassword.scss';
import logoMain from "@Logos/logo_yard_sale.svg";
import styles from '@Styles/ChangePassword.module.scss';

const ChangePassword = () => {
    
    return (
        <div className={styles.ChangePassword}>
            <div className={styles['form-container']}>
                <Image src={logoMain} alt="logo" className={styles['ChangePassword-logo']} />
                <h1 className="title">Create a new password</h1>
                <p className={styles.subtitle}>Enter a new passwrd for you account</p>
                <form action="/" className={styles.form}>
                    <label htmlFor="password" className={styles.label}>
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className={styles['input'], styles['input-password']}
                    />
                    <label htmlFor="new-password" 
                        className={styles.label}>
                        Password
                    </label>
                    <input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                        className={styles['input'], styles['input-password']}
                    />
                    <input
                        type="submit"
                        value="Confirm"
                        className={styles['primary-button'], styles['ChangePassword-button']}
                    />
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
