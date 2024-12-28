import { ReactNode } from 'react'

export default function Navbar({ children }: { children: ReactNode }) {
  return <nav className="absolute mx-10  mt-12 flex w-full">{children}</nav>
}
