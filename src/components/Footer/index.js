import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footer__left}>
          <h2 className={styles.footer__brand}>Covid ID</h2>
          <p className={styles.item__author}>Developed by Anwarsan1212</p>
        </div>
        <div className={styles.footer__right}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Global</li>
            <li className={styles.footer__item}>Indonesia</li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
