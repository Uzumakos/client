import PwofilTet from '../components/pwofil/PwofilTet'
import PwofilTwit from '../components/pwofil/PwofilTwit'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
    content: `max-w-[1400px] w-2/3 flex justify-between`,
    mainContent: `flex-[2] border-r border-l border-[#38444d]`,
  }

const Pwofil = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}></div>
      <Sidebar />
      <div className={style.mainContent}>
        <PwofilTet />
        <PwofilTwit />
      </div>
      <Widgets />
    </div>
  )
}

export default Pwofil