import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div>
        <ul>
          <li><Link href="/produtos/calca">CALÇA</Link></li>
          <li><Link href="/produtos/camisa">CAMISA</Link></li>
          <li><Link href="/produtos/tenis">TÊNIS</Link></li>
        </ul>

          <figure>
            <Image src="/sup-shelf_640.png" alt="Prateleira" width={320} height={320}/>
          </figure>

      </div>


    </>
  )
}