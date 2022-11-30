import { useRouter } from 'next/router';
import Link from 'next/link';

const style = {
	color: '#0070f3',
	textDecoration: 'underline'
}

const ActiveLink = ({text, href}) => {

	const { asPath } = useRouter();


	return (
		<Link href={ href }>
			<span style={ asPath === href ? style :  null }>{ text }</span>
		</Link>
	)
}

export default ActiveLink