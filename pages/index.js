import { useContext } from 'react'
import { TwitterContext } from '../context/TwitterContext'
import Sidebar from '../components/Sidebar'
import Feed from '../components/home/Feed'
import Widgets from '../components/Widgets'
import Image from 'next/image'
import metamaskLogo from '../assets/metamask.png'
import errorImg from '../assets/error.png'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
}

export default function Home() {
  const { appStatus, konekteBous } = useContext(TwitterContext)

  const app = (status = appStatus) => {
    switch (status) {
      case 'konekte':
        return userLoggedIn

      case 'paKonekte':
        return noUserFound

      case 'noMetaMask':
        return noMetamaskFound

      case 'error':
        return error

      default:
        return loading
    }
  }
  const userLoggedIn = (
    <div className={style.content}>
    <Sidebar />
    <Feed />
    <Widgets />
  </div>
  )

  const noUserFound = (
    <div className={style.loginContainer}>
       <Image src={metamaskLogo} height={200} width={200} />
       <div className={style.loginContent}>Konekte a Bous ou</div>
       <div className={style.walletConnectButton} onClick={() => konekteBous()}>
         Konekte Bous
       </div>
       
    </div>
  )


  const noMetamaskFound = (
    <div className={style.loginContainer}>
       <Image src={metamaskLogo} height={200} width={200} />
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://metamask.io/download.html`}
        >
          Ou dwe enstale Metamask, se <br /> bous vityèl Ethereum, nan 
          bwozè ou a.
        </a>
      </div>
    </div>
  )


  const error = (
    <div className={style.loginContainer}>
       <Image src={errorImg} height={250} width={250} />
       <div className={style.loginContent}>
         Gen yon erè. Tanpri eseye ankò oubyen itilize yon lòt navigatè
       </div>
    </div>
  )

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>Lap chaje...</div>
    </div>
  )

  return (
    <div className={style.wrapper}>
     {app(appStatus)}
    </div>
  )
}


