import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {client} from '../lib/client'

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
    const [appStatus, setAppStatus] = useState()
    const [currentAccount, setCurrentAccount] = useState('')
    const router = useRouter()

    useEffect(() => {
        tchekeSiBousKonekte()
    }, [])

/** la se pou nou gade si gen yon bous ki konekte */
    const tchekeSiBousKonekte = async () => {
        if (!window.ethereum) return
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })
             if(addressArray.length > 0) {
                 //konekte
                setAppStatus('konekte')
                setCurrentAccount(addressArray[0])
                kreyeKontItilizate(addressArray[0])
             }else{
                 //pa konekte
                 router.push('/')
                 setAppStatus('paKonekte')
             }
        }catch (error) {
            console.log(error);
        }
    }

    /**nan pati sa nou ap lanse kote
     * pou li konekte ak bous Metamask la
     */
    const konekteBous = async () => {
        if(!window.ethereum) return setAppStatus('ou pa gen Metamask')
        try {
            setAppStatus('loading')

            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts',
            })

            if(addressArray.length > 0) {
                setAppStatus('konekte')
                setCurrentAccount(addressArray[0])
                kreyeKontItilizate(addressArray[0])
            } else {
                router.push('/')
                setAppStatus('paKonekte')
            }
        }catch (error) {
            setAppStatus('error')
        }
    }
/**La se pou pèmèt nou kreye yon kont nan database Sanity
 * si itilizatè a pat genyen youn
 * @param {String} userWalletAddress de itilizatè ki fek konekte a
 */
    const kreyeKontItilizate = async (adresBousItilizate = currentAccount) => {
        if (!window.ethereum) return setAppStatus('pagenMetamask')
        try {
            const itilizateDoc = {
                _type: 'users',
                _id: adresBousItilizate,
                name: 'Unamed',
                isProfileImageNft: false,
                profileImage: '/logo.jpg',
                walletAddress: adresBousItilizate,
            }
            
            await client.createIfNotExists(itilizateDoc)
            //upload
        }   catch(error) {
            router.push('/')
            setAppStatus('erè')
        }
    }

    return (
        <TwitterContext.Provider value={{ appStatus, currentAccount, konekteBous}}>
            {children}
        </TwitterContext.Provider>
    )
}
