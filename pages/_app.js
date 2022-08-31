import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

const supportedChainIds = [1, 4, 137];

const connectors = {
  injected: {}
};

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThirdwebProvider desiredChainId={ChainId.Goerli} chainRpc={{[ChainId.Goerli]: 'https://goerli.infura.io/v3/84d695c243574097b2eca04771dfa3b3'}}>

            <Component {...pageProps} />
        </ThirdwebProvider>
    )
}

export default MyApp