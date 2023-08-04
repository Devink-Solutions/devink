import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className=" flex h-auto w-full justify-center gap-8 bg-orange-500  px-20 py-10 font-medium text-white  md:justify-between ">
      <div className="flex flex-col">
        <h3 className="font-semibold">Medios de contacto</h3>
        <ul className="list-disc ">
          <li>E-mail: team@devink.dev</li>
          <li>Cel: +54 9 341 6366234</li>
        </ul>
      </div>
      <div className="">
        <h3>Links utiles</h3>
        <ul className="flex list-none gap-2">
          <li>
            <Link
              href="https://www.linkedin.com/company/devink-solutions/"
              target="_blank"
            >
              <FaLinkedin size={"1.2em"} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
