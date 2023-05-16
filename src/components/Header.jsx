
export function Header() {
  return (
    <header className="py-8 flex flex-col md:flex-row gap-8 md:gap-12  border-b-2  justify-start w-[70%] mx-auto">
     <ul className="flex font-medium gap-x-12 ">
      <li><a href="#" className="text-pink-400  border-none pb-10 md:border-b-2 md:border-pink-400">About</a></li>
      <li><a href="#" className="hover:text-pink-400 transition-all whitespace-nowrap">How it works</a></li>
      <li className="w-96 truncate white"><a href="#" className="hover:text-pink-400 transition-all ">Get a photographer</a></li>
    </ul>
    <button className="border-gray-300 border-2 rounded-full text-sm text-gray-400 py-1 px-2 hover:bg-pink-400 hover:border-transparent hover:text-white transition-all font-medium">Login</button>
  </header>
  )
}
