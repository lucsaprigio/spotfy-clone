import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image src="/album.jpg" className="w-full" width={56} height={56} alt="Capa do álbum Oficina G3" />
                <div className="flex flex-col gap-1">
                    <strong className="font-normal">Title music</strong>
                    <span className="text-xs text-zinc-400">Artist Name</span>
                </div>
            </div>
            <div className=" flex flex-col items-center">
                <div className="flex items-center gap-4">
                    <Shuffle size={20} className="text-zinc-200" />
                    <SkipBack size={20} className="text-zinc-200" />

                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto">
                        <Play />
                    </button>

                    <SkipForward size={20} className="text-zinc-200" />
                    <Repeat size={20} className="text-zinc-200" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">0:31</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
                    </div>
                    <span className="text-xs text-zinc-400">2:14</span>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <Mic2 size={20} />
                    <LayoutList size={20} />
                    <Laptop2 size={20} />
                    <div className="flex items-center gap-2">
                        <Volume size={20} />
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-zinc-400">0:31</span>
                            <div className="h-1 rounded-full w-20 bg-zinc-600">
                                <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
                            </div>
                            <span className="text-xs text-zinc-400">2:14</span>
                        </div>
                    </div>
                    <Maximize2 size={20} />
                </div>
            </div>
        </footer>
    )
}