import React, { FC, PropsWithChildren } from 'react'
import Head from 'next/head';
import { Navbar } from '../ui';

interface LayoutProps extends PropsWithChildren {
	title?: string;
}

export const MainLayout: FC<LayoutProps> = ({title = 'Pokemon App', children}: LayoutProps) => {
	return (
		<>
			<Head>
				<title>{ title }</title>
				<meta name='author' content='Fernando Herrera' />
				<meta name='description' content={`Informacion sobre : ${ title }`} />
				<meta name='keywords' content={`${title}, pokemon, pokedex`} />
			</Head>

			<Navbar/>
			<main style={{
				padding: '0px 20px'
			}}>
				{children}
			</main>
		</>
	);
}
