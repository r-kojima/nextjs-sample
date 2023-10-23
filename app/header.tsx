import Link from 'next/link';
// imgタグではなくnext/imageのImageを使う
import Image from 'next/image'

const header = () => {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <Image src="/vercel.svg" className="w-32" alt='' width={60} height={40}/>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;