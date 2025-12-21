// import styles from '../../App.module.css';

function Header () {

  const links = [
    {id: 'home', text: 'Главная', url: '/'},
    {id: 'categories', text: 'Категории', url: '/'},
    {id: 'new-items', text: 'Новинки', url: '/'},
    {id: 'stock', text: 'Акции', url: '/'},
    {id: 'about-us', text: 'О нас', url: '/'},
  ]
  return (
    <>
      <header>
        <nav>
          {links.map((item) => (
            <a
             key={item.id}
             href={item.url}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </header>
    </>
  )
}

export default Header;