import { Home as HomeIcon, Search, Library, ChevronRight, ChevronLeft, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, Laptop2, LayoutList, Volume, Maximize, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/20 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/20 p-1" >
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10"></h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Oficina G3" />
              <strong>Histórias de Bicicletas</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Oficina G3" />
              <strong>Histórias de Bicicletas</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Oficina G3" />
              <strong>Histórias de Bicicletas</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Oficina G3" />
              <strong>Histórias de Bicicletas</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Oficina G3" />
              <strong>Histórias de Bicicletas</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Oficina G3" />
              <strong>Histórias de Bicicletas</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Lucas Aprigio</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Oficina G3" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Nome do artista</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Oficina G3" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Nome do artista</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Oficina G3" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Nome do artista</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Oficina G3" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Nome do artista</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Oficina G3" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Nome do artista</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
