export default function Footer() {
    return (


<footer className="bg-white m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://www.linkedin.com/in/rodrigo-v%C3%A1squez-34425924b/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/coding.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Rodrigo Vas-dev</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
                    <a href="#career" className="hover:underline me-4 md:me-6">Career</a>
                </li>
                <li>
                    <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="https://github.com/rodrigovasdev" className="hover:underline me-4 md:me-6">Github</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rodrigo-v%C3%A1squez-34425924b/" className="hover:underline me-4 md:me-6">Linkedin</a>
                </li>
                <li>
                    <a href="#contact" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">© 2025 <a href="https://flowbite.com/" className="hover:underline">Rodrigo Vasquez™</a>. All Rights Reserved.</span>
    </div>
</footer>


    )
}