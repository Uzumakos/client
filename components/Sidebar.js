import { FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import { useState } from 'react'
import SidebarOPtion from './SidebarOption'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri' 
import { BiHash } from 'react-icons/bi'
import { FiBell } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import { BsBookmark, BsBookmarkFill, BsPerson, BsPersonFill } from 'react-icons/bs'



const style = {
    wrapper: `flex-[0.7] px-8 flex flex-col`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer`,
    profileLeft: `flex items-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,
    
}

function Sidebar({initialSelectedIcon = 'Akèy'}) {
    const [selected, setSelected] = useState(initialSelectedIcon)
    return (
        <div className={style.wrapper}>
            <div className={style.twitterIconContainer}>
                <VscTwitter />
            </div>
            <div className={style.navContainer}>
                <SidebarOPtion 
                    Icon={selected === 'Akèy' ? RiHome7Fill : RiHome7Line}
                    text='Akèy'
                    isActive={Boolean(selected === 'Akèy')}
                    setSelected={setSelected}
                    redirect={'/'}
                />
                <SidebarOPtion 
                   Icon={selected === 'Eksplore' ? FaHashtag : BiHash}
                   text='Eksplore'
                   isActive={Boolean(selected === 'Eksplore')}
                   setSelected={setSelected}
                />
                  <SidebarOPtion 
                   Icon={selected === 'Notifikasyon' ? FaBell : FiBell}
                   text='Notifikasyon'
                   isActive={Boolean(selected === 'Notifikasyon')}
                   setSelected={setSelected}
                />
                  <SidebarOPtion 
                   Icon={selected === 'Mesaj' ? HiMail : HiOutlineMail}
                   text='Mesaj'
                   isActive={Boolean(selected === 'Mesaj')}
                   setSelected={setSelected}
                />
                  <SidebarOPtion 
                   Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
                   text='Bookmarks'
                   isActive={Boolean(selected === 'Bookmarks')}
                   setSelected={setSelected}
                />
                  <SidebarOPtion 
                   Icon={selected === 'Lis' ? RiFileList2Fill : FaRegListAlt}
                   text='Lis'
                   isActive={Boolean(selected === 'Lis')}
                   setSelected={setSelected}
                />
                  <SidebarOPtion 
                   Icon={selected === 'Pwofil' ? BsPersonFill : BsPerson}
                   text='Pwofil'
                   isActive={Boolean(selected === 'Pwofil')}
                   setSelected={setSelected}
                   redirect={'/Pwofil'}
                />
                <SidebarOPtion Icon={CgMoreO} text='Plis' setSelected={setSelected} />
                <div className={style.tweetButton}>Mint</div>
            </div>
            <div className={style.profileButton}>
                <div className={style.profileLeft}></div>
                <div className={style.profileRight}>
                    <div className={style.details}>
                        <div className={style.name}>Amédée Erns Baptiste</div>
                        <div className={style.handle}>@022dB...5xf2df</div>
                    </div>
                    <div className={style.moreContainer}>
                        <FiMoreHorizontal />
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Sidebar