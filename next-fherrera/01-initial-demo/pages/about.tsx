import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { NextPage } from 'next'

export default function About() {
  return (
		<>
			<h1>About Page</h1>
			<h1 className='title'>
				Go to <Link href="/">Home</Link>
				{/* Go to <a href="/">Home</a> */}
			</h1>

			<p className='description'>
				Get started by editing{' '}
				<code className='code'>pages/about.js</code>
			</p>
		</>
  )
}

About.getLayout = function getLayout( page: JSX.Element ){
	return(
    <MainLayout>
			<DarkLayout>
				{ page }
			</DarkLayout>
		</MainLayout>

	)
}
