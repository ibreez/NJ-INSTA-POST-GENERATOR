import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full py-4 border-b">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="border-2 border-rose-600 rounded-lg bg-black shadow-md inline-flex items-center justify-center p-1">
            {/* Using explicit width and height with proper aspect ratio */}
            <Image
              src="/images/nj-logo-1.jpg"
              alt="NJ Hardware Logo"
              width={80}
              height={80}
              priority
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] object-contain"
            />
          </div>
          <div className="hidden sm:block text-xl md:text-2xl font-bold text-rose-600">NJ Hardware</div>
        </Link>
      </div>
    </header>
  )
}
