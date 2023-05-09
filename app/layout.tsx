import './globals.css'
import {Nunito} from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Modal from './components/modals/Modal';

export const metadata = {
  title: 'AirBnB Clone',
  description: 'A clone of AirBnB to learn some cool technology!',
}


const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen/>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
