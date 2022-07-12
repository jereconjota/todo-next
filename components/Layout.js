import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlinePlus } from 'react-icons/ai'
import { useTasks } from '../context/TaskContext'


const Layout = ({ children }) => {

    const router = useRouter();
    const { tasks } = useTasks();

    return (
        <div className="bg-gray-900 h-screen text-white">
            <header className="flex items-center bg-gray-800 text-white px-28 py-5 font-bold">
                <Link href="/">
                    <a>
                        <h1 className="fon t-black text-lg">Task App</h1>
                    </a>
                </Link>
                <span className='ml-2 text-gray-400'>{tasks.length} Tasks</span>
                <div className="flex-grow text-right">
                    <button className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-800 
                    font-bold rounded-sm inline-flex items-center" onClick={() => router.push('/new')}><AiOutlinePlus className='mr-2' /> Add Task</button>
                </div>
            </header>
            <main className="px-28 py-10">
                {children}

            </main>
        </div>

    )
}

export default Layout