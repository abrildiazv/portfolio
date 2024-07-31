export default function Navbar({ setPage }) {
  function handleClick(page) {
    setPage(page);
  }

  return (
    <div>
      <header>
        <nav className="navbar">
          <a onClick={() => handleClick('home')}>Logo/Name</a>
          <ul className="navMenu">
            <li>
              <a onClick={() => handleClick('home')}>Home</a>
            </li>
            <li>
              <a onClick={() => handleClick('catalog')}>Catalog</a>
            </li>
            <li>
              <a onClick={() => handleClick('contact')}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}