import ArrowRight from '@/assets/arrow-right.svg';
// import Logo from '@/assets/logosaas.png';
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg'
import Logo from '@/assets/logo-dark.png';

export const Header = () => {
  return(
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt='Saas Logo' height={60} width={60} />
            <MenuIcon className='h-5 w-5 md:hidden' />
              <nav className='hidden md:flex gap-6 text-black/60 items-center'>
                <a href="#home">Bosh sahifa</a>
                <a href="#courses">Kurslar</a>
                <a href="#comments">Izohlar</a>
                <a href="#contact">Kontakt</a>
                <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>Aloqa</button>
              </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
