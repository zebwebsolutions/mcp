import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer';
import LogosTags from '../components/logosTags';
import MapProperties from '../components/map/mapProperties';
import { loadProperties } from '@/lib/fetchUrl';
import Card from '@/components/card';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
    const URL = 'http://localhost:3000/properties/get-all'
    const res = await fetch(URL)
    const data = await res.json()

    return {
        props: {
            properties: data
        }
    }
}

export default function allProperties({properties}) {
  return (
    <>
        <h3>All Properties</h3>
        <div className='flex flex-wrap'>
            {properties.map(property => {
                return (
                    <Link key={property._id} href={`/project/${property._id}`}>
                        <Card projectName={property.projectName} />
                    </Link>
                )
            })}
        </div>
    </>
  )
}
