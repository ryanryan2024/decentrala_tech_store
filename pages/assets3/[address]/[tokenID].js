import { MediaRenderer, useMarketplace, useActiveListings, useAddress } from "@thirdweb-dev/react"
import { useRouter } from "next/router"
import { BigNumber } from "ethers"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import Navbar from "../../../components/navbar"
import Logo from '../../../public/eth-logo.png'

const NFT = () => {
    const [listing, setListing] = useState()
    const [loading, setLoading] = useState(false)
    const marketplace = useMarketplace("0x17a06bba84f4550e1c4A8b02e6DB8F811e63c252")
    const address = useAddress()
    const router = useRouter()
    const {tokenID} = router.query

    useEffect(() => {
        getListing()
    }, [])

    const getListing = async () => {
        try {
            setLoading(true)
            const listing = await marketplace.getListing(BigNumber.from(tokenID))

            setListing(listing)
            setLoading(false)
        } 

        catch(error) {
            console.log(error)
        }
    }

    const buyNFT = async () => {
        try {
            await marketplace.buyoutListing(tokenID, 1)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Head>
                <title>Order | Decentrala</title>
                <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
            </Head>

                <div>
                    <Navbar />
                <div>

                <div>
                    <form action="https://formspree.io/f/xpznwydl" method="POST">
                        <div className="flex justify-center">
                            <div className="py-5 font-bold underline">
                                <label for="name">Order</label>
                            </div>
                        </div>
                        <div className="flex justify-center py-2 italic">Information & Shipping</div>
                        <div className="flex justify-center py-2">
                            <input type="text" name="name" placeholder="Full Name" className="bg-slate-200 p-1 rounded-2xl pl-2 w-72 text-black" />
                        </div>
                        <div className="flex justify-center py-2">
                            <input type="text" name="order_name" placeholder="Type The Product's Name" className="bg-slate-200 p-1 rounded-2xl pl-2 w-72 text-black"/>
                        </div>
                        <div className="flex justify-center py-2">
                            <input type="text" name="email" placeholder="Email" className="bg-slate-200 p-1 rounded-2xl pl-2 w-72 text-black"/>
                        </div>
                        <div className="flex justify-center py-2">
                            <input type="text" name="address" placeholder="Address" className="bg-slate-200 p-1 rounded-2xl pl-2 w-72 text-black"/>
                        </div>
                        <div className="flex justify-center py-2">
                            <input type="text" name="city_state" placeholder="City, State" className="bg-slate-200 p-1 rounded-2xl pl-2 w-72 text-black"/>
                        </div>
                        <div className="flex justify-center py-2">
                            <input type="text" name="zip_code" placeholder="Zip Code" className="bg-slate-200 p-1 rounded-2xl pl-2 w-72 text-black"/>
                        </div>
                        <div className="flex justify-center py-10">
                            <button type="submit" className="text-sm border-2 border-white p-2 rounded-2xl hover:bg-white hover:text-black w-72">
                                Submit Info & Shipping
                            </button>
                        </div>
                    </form>
                    <div className="flex justify-center pt-10 font-bold underline">Purchase</div>
                    <div className="flex justify-center pt-2 italic">*Ensure wallet is connected with sufficient funds.*</div>
                    <div className="flex justify-center pt-2 italic">*Click once, may take 10 seconds for a response.*</div>
                    <div className="flex justify-center p-5">
                        <button onClick={buyNFT} className="text-sm border-2 border-white p-2 rounded-2xl hover:bg-white hover:text-black w-72">Purchase</button>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    )
}

export default NFT