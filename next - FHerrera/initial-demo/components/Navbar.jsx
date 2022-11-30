import Link from 'next/link';
import ActiveLink from './ActiveLink';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={ styles['menu-container'] }>
			<ActiveLink text="Home" href='/'/>
			<ActiveLink text="About" href='/about'/>
			<ActiveLink text="Contact" href='/contact'/>
			<Link href='/contact'>Contact</Link>
		</nav>
	)
}

export default Navbar