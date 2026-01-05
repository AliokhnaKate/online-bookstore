import {FaAddressBook, FaAppStore, FaClock, FaGooglePlay, FaPhone, FaTelegram, FaVk, FaYoutube} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa6";
import styles from '../../App.module.css';

function Footer () {
  const linksHelp = [
    {id: 'delivery-payment', text: 'Доставка и оплата', url: '/'},
    {id: 'return', text: 'Возврат товара', url: '/'},
    {id: 'contacts', text: 'Контакты', url: '/'}
  ];

  const linksSales = [
    {id: 'vk', icon: <FaVk size={24}/>, href: 'https://vk.com'},
    {id: 'telegram', icon: <FaTelegram size={24}/>, href: 'https://t.me'},
    {id: 'youtube', icon: <FaYoutube size={24}/>, href: 'https://www.youtube.com/'}
  ];

  const contactsUs = [
    {id: 'phone', icon: <FaPhone size={24}/>, text: '+375(29)506-40-10', href: ''},
    {id: 'email', icon: <FaEnvelope size={24}/>, text: '5064010@mail.ru', href: ''},
    {id: 'address', icon: <FaAddressBook size={24}/>, text: 'г.Минск, ул.Гвардейская', href: ''},
    {id: 'workschedule', icon: <FaClock size={24}/>, text: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00', href: ''}
  ];

  const mobileApplication = [
    {id: 'GooglePlay', icon: <FaGooglePlay size={24}/>, text: 'Google Play', href: ''},
    {id: 'AppStore', icon: <FaAppStore size={24}/>, text: 'App Store', href: ''}
  ]
  return (
    <>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Следите за акциями и новостями</h3>
          <div className={styles.socialLinks}>
            {linksSales.map(item => (
              <a key={item.id} href={item.href}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Помощь</h3>
          <div className={styles.help}>
            {linksHelp.map((item) => (
              <a key={item.id} href={item.url}>
                {item.text}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Наши контакты</h3>
          <div className={styles.contactsUs}>
            {contactsUs.map(item => (
              <a key={item.id} href={item.href}>
                {item.icon} {item.text}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Скачайте мобильное приложение</h3>
          <div className={styles.mobileApplication}>
            {mobileApplication.map(item => (
              <a key={item.id} href={item.href}>
                {item.icon} {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;