import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6" >
            <nav className="space-y-5 mb-4">
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <HomeIcon />
                    Home
                </a>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <Search />
                    Search
                </a>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <Library />
                    Your Library
                </a>

            </nav >

            <nav className="mt1-10 pt-10 border-t border-zinc-800 flex flex-col gap-">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 2</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 3</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 4</a>
            </nav>
        </aside>
    )
}