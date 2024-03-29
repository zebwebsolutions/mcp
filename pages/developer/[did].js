import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer'
import LogosTags from '../../components/logosTags'
import DeveloperHeader from '@/components/developers/developerHeader'
import ListingBody from '../../components/singlelisting/listingBody'
import Features from '@/components/singlelisting/features'
import DeveloperBody from '@/components/developers/developerBody'
import {useState, useEffect} from 'react'
import axios from 'axios'


export async function getStaticPaths() {
    const URL = `http://localhost:3000/developers/get-all`
    const res = await fetch(URL)
    const data = await res.json()

    const paths = data.map((developer) => {
        return {
            params: {
                did: `${developer._id}`
            }
        }
    })

    return {
        paths: paths, fallback: false
    }
}

export async function getStaticProps({params}) {

    const URL = `http://localhost:3000/developers/get-developer/${params.did}`
    const res = await fetch(URL)
    const data = await res.json()

    return {
        props: {
            developer: data
        }
    }
}


const DeveloperPage = ({developer}) => {
    const [featuredProperty, setFeaturedProperty] = useState([])
    useEffect(() => {
        async function fetchProperties() {
            const res = await axios.get('http://localhost:3000/properties/by-developer/' + developer._id)
            .then(response => setFeaturedProperty(response.data))
        }
        fetchProperties()
    }, [])


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
                <DeveloperHeader 
                    name={developer.developerName}
                    price={featuredProperty[0] && featuredProperty[0].price}
                    urls={featuredProperty[0] && featuredProperty[0].galleryImgs}
                />
                <DeveloperBody developer={developer} embed={featuredProperty[0] && featuredProperty[0].videoEmbed} />


            </main>
            <Footer />
            </>
        )
}

export default DeveloperPage