import { Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";
import { useCallback, useEffect, useState, useMemo } from "react";
// import { Networks } from '../env'
import { Signer, ethers } from "ethers";
// import { formatPrice } from '../utils'

// interface WalletListerMessage {
//   accounts?: string[]
//   chainId?: number
//   error?: { code: number, message: string }
// }

function useWeb3Modal() {
  //   const [connection, setConnection] = useState<any>(null);
  const [provider, setProvider] = useState<Web3Provider | null>(null);
  const [signer, setSigner] = useState<Signer | null>(null);
  const [chainId, setChainId] = useState<number | undefined>(
    Number(String(process.env.REACT_APP_CHAIN_ID))
  );
  //   const [balance, setBalance] = useState<string>("");
  //   const [signedInAddress, setSignedInAddress] = useState("");

  //   const web3Modal = new Web3Modal({
  //     // network: Networks[import.meta.env.VITE_CHAIN_ID],
  //     cacheProvider: true,
  //   });

  const web3Modal = useMemo(
    () =>
      new Web3Modal({
        // network: Networks[import.meta.env.VITE_CHAIN_ID],
        cacheProvider: true,
      }),
    []
  );

  const loadWeb3Modal = useCallback(async () => {
    console.log("loaddddd")
    const instance = await web3Modal.connect();
    const ethersProvider = new ethers.providers.Web3Provider(instance);
    const etherSigner = ethersProvider.getSigner();
    const chainID = (await ethersProvider.getNetwork()).chainId;
    // setConnection(conn);
    setSigner(etherSigner);
    setProvider(ethersProvider);
    setChainId(chainID);
    // setSignedInAddress(conn.selectedAddress);
  }, [web3Modal]);

  const logoutOfWeb3Modal = useCallback(async () => {
    web3Modal.clearCachedProvider();
    window.location.reload();
  }, [web3Modal]);

  return {
    web3Modal,
    provider,
    signer,
    loadWeb3Modal,
    logoutOfWeb3Modal,
    // signedInAddress,
    chainId,
    // balance,
  };
}

/**
 * web3Modal object for creating connection or provider for rpc calls,
 * If you need an indicator for user login or logout status, please using web3Modal.cachedProvider,
 * which is maintained by the internal library for this purpose.
 *
 * If you need balance, account address etc, please use the export variables.
 */
export default useWeb3Modal;
