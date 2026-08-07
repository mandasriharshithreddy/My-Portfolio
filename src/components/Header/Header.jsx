import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <img
      src="/profile.jpeg"
      alt="Profile"
      className="profile-logo"
      />
      <Navbar />
    </header>
  )
}

export default Header