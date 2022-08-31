import Logo from '../public/eth-logo.png'
import Image from 'next/image'
import { useMarketplace, useActiveListings, MediaRenderer, useNetwork, useNetworkMismatch } from "@thirdweb-dev/react"

const NFTCard = ({listing}) => {
    return (
        <div>
            <div className='pt-10 pl-5 pr-5 flex justify-center'>
                <div>
                    <div className='flex border-2 border-white rounded-xl'>
                        <div className='p-5'>
                            <MediaRenderer src={listing.asset.image} width={300} height={300} className="rounded-3xl" />
                        </div>
                    <div className='p-5 py-10'>
                        <h1 className='text-sm font-bold pb-5'>
                            {listing.asset.name}
                        </h1>
                        <h2 className='text-sm font-light py-2'>Type: Lifestyle & Technology</h2>
                        <h2 className='text-sm font-light py-2 pb-32'>Condition: New</h2>
                        <h1><b className="font-light pl-1">{listing.buyoutCurrencyValuePerToken.displayValue}</b> <Image src={Logo} width={9.25} height={15} /></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NFTCard