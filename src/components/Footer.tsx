import 'primeicons/primeicons.css'

export default function Footer() {
  return (
    <button className="inline-block  ">
      <a href="https://github.com/Xyves/where-is-waldo">
        <footer className="fixed bottom-0 left-0 m-8 flex w-52 items-center justify-center bg-[#1B1725] px-10 py-8 text-white">
          <i
            className="pi pi-github block pr-2 text-2xl
"
          ></i>
          <span className=" inline-block font-footer text-lg uppercase">
            Github
          </span>
        </footer>
      </a>
    </button>
  )
}
