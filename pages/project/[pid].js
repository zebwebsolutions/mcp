import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer'
import LogosTags from '../../components/logosTags'
import ListingHeader from '../../components/singlelisting/listingHeader'
import ListingBody from '../../components/singlelisting/listingBody'
import Features from '@/components/singlelisting/features'
import {useRouter} from "next/router"
import axios from 'axios'

export async function getStaticPaths() {
    const URL = `http://localhost:3000/properties/get-all`
    const res = await fetch(URL)
    const data = await res.json()

    const paths = data.map((property) => {
        return {
            params: {
                pid: `${property._id}`
            }
        }
    })

    return {
        paths: paths, fallback: false
    }
}

export async function getStaticProps({params}) {

    const URL = `http://localhost:3000/properties/get-property/${params.pid}`
    const res = await fetch(URL)
    console.log(res)
    const data = await res.json()

    return {
        props: {
            property: data
        }
    }
}

const Property = ({property}) => {
    

    return (
            <>
            <Head>
                <title>Single Listing Page - Marea Capital Properties</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Header />
                <ListingHeader 
                    name={property.projectName}
                    area={property.location}
                    price={property.price}
                 />
                <ListingBody property={property} />
                <Features features={property.features} />
                <LogosTags />
            </main>
            <Footer />
            </>
        )
}

export default Property