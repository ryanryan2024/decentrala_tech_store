import Logo from '../public/logo.png'
import Image from 'next/image'
import { Menu } from '@headlessui/react'
import metamaskLogo from '../public/metamask.png'
import coinbaseLogo from '../public/coinbase.svg'
import walletConnectLogo from '../public/wallet_connect.png'
import {useMetamask, useAddress, useCoinbaseWallet, useWalletConnect} from "@thirdweb-dev/react";

const Navbar = () => {
    const connectMetamask = useMetamask()
    const connectCoinbase = useCoinbaseWallet()
    const connectWalletConnect = useWalletConnect()
    const address = useAddress()

    return (
        <div>
            <div className='flex justify-between pt-7 pl-8 pr-8 pb-7'>
                <a href='https://decentrala.netlify.app/'> 
                    <Image src={Logo} alt="logo" width={150} height={80} />
                </a>

                <div className='pt-5'>
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="inline-flex bg-none p-2 rounded-3xl">↓ Connect Wallet</Menu.Button>
                        <Menu.Items className="py-2">
                            <Menu.Item className="bg-white w-full text-left p-2 rounded-lg">
                                {({active}) => (
                                    <div>
                                        <div className="py-1">
                                            <button onClick={connectMetamask}>
                                                <h1 className="font-bold text-sm text-black"><Image src={metamaskLogo} width={12} height={12} /> Metamask</h1>
                                            </button>
                                        </div>
                                        <div className="bg-black w-full h-px"></div>
                                        <div className="py-1">
                                            <button onClick={connectCoinbase}>
                                                <h1 className="font-bold text-sm text-black"><Image src={coinbaseLogo} width={12} height={12} /> Coinbase</h1>
                                            </button>
                                        </div>
                                        <div className="bg-black w-full h-px"></div>
                                        <div className="py-1"> 
                                            <button onClick={connectWalletConnect}>
                                                <h1 className="font-bold text-sm text-black"><Image src={walletConnectLogo} width={12} height={12} /> WalletConnect</h1>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Navbar