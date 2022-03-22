import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}


const twiti = [
  {
      displayName: 'Amédée',
      userName: '0x1cBFB2A50E076D9E858d1bef2e764f9587199BD1',
      avatar: '/logo.jpg' ,
      text: 'Sakap fèt?',
      isProfileImageNft: false,
      timestamp: '2022-03-11T12:00:00.000Z',
  },
  {
      displayName: 'Amédée',
      userName: '0x1cBFB2A50E076D9E858d1bef2e764f9587199BD1',
      avatar: '/logo.jpg',
      text: 'Bonjou',
      isProfileImageNft: false,
      timestamp: '2022-02-13T12:00:00.000Z',
  },
  {
      displayName: 'Amédée',
      userName: '0x1cBFB2A50E076D9E858d1bef2e764f9587199BD1',
      avatar: '/logo.jpg',
      text: 'Kijan nou leve?',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z',
  },
  {
      displayName: 'Amédée',
      userName: '0x1cBFB2A50E076D9E858d1bef2e764f9587199BD1',
      avatar: '/logo.jpg',
      text: 'Bonjou',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z',
  },
  {
      displayName: 'Amédée',
      userName: '0x1cBFB2A50E076D9E858d1bef2e764f9587199BD1',
      avatar: '/logo.jpg',
      text: 'Bonjou',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z',
  }
]

const PwofilTwit = () => {
  return (
    <div className={style.wrapper}>
      {twiti.map((twit, index) => (
        <Post 
        key={index}
        displayName="Amédée Erns Baptiste"
        userName={`${twit.userName.slice(0, 4)}...${twit.userName.slice(-4)}`}
        text={twit.text}
        avatar={twit.avatar}
        isProfileImageNft={twit.isProfileImageNft}
        timestamp={twit.timestamp}
        />
      ))}
    </div>
  )
}

export default PwofilTwit