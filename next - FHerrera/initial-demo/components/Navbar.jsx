import Link from 'next/link';
import ActiveLink from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
	{
		text:'Home',
		href:'/'
	},
	{
		text:'About',
		href:'/about'
	},
	{
		text:'Contact',
		href:'/contact'
	},
	{
		text:'Pricing',
		href:'/pricing'
	},
]

const Navbar = () => {
	return (
		<nav className={ styles['menu-container'] }>
			{ menuItems.map( item => (<ActiveLink text={item.text} href={item.href}/>))}
			{/* <ActiveLink text="Home" href='/'/>
			<ActiveLink text="About" href='/about'/>
			<ActiveLink text="Contact" href='/contact'/>
			<ActiveLink text="Pricing" href='/pricing'/> */}
			{/* <Link href='/contact'>Contact</Link> */}
		</nav>
	)
}

export default Navbar