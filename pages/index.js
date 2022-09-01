import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Listing from '../components/appleListing'
import Listing1 from '../components/metaListing1'
import Listing2 from '../components/bookListing2'
import Listing3 from '../components/bookListing3'
import { Tab } from '@headlessui/react'
import apple from '../public/apple.png'
import apple2 from '../public/apple2.png'
import meta from '../public/meta.png'
import gaming from '../public/gaming.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Store | Decentrala</title>
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
      </Head>
      <Navbar />
      <div>
        <div className='p-10 font-extralight flex justify-center'>
          "Any sufficiently advanced technology is indistinguishable from magic." - Arthur C. Clarke
        </div>
        <div className='flex justify-center pb-5'>
          <h1 className="font-extralight text-sm">
            Note: Want to exchange with a different currency? <a className="underline" href="https://decentrala.netlify.app/contact.html">Contact us.</a>
          </h1>
        </div>
            <Tab.Group>
                <Tab.List className="flex justify-between px-2 bg-white text-black p-3 rounded-3xl text-sm">
                    <Tab>Apple©</Tab>
                    <Tab>Meta©</Tab>
                    <Tab>Gaming</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className="py-5">
                          <div className='pb-2 flex justify-center'>
                            <Image src={apple} alt="" width={1290} height={265} className="rounded-3xl" />
                          </div>
                          <div className='flex justify-center'>
                            <Image src={apple2} alt="" width={1290} height={265} className="rounded-3xl" />
                          </div> 
                        </div>
                        <Listing />
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='pb-2 flex justify-center pt-5'> 
                        <Image src={meta} alt="" width={1290} height={265} className="rounded-3xl" />
                      </div>
                      <Listing1 />
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='pb-2 flex justify-center pt-5'> 
                        <Image src={gaming} alt="" width={1290} height={265} className="rounded-3xl" />
                      </div>
                      <Listing2 />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    </div>
  )
}
