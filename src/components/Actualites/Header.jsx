import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faNewspaper } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    return (
        <header class="py-16 text-center sm:text-center px-10" style={{
            backgroundImage: "url('/assets/images/banner/01.jpg')",
            //BG opacity 0.5
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundBlendMode: "multiply",
            backgroundPosition: "center",
        }}>
            <h1 class="mb-4 text-3xl sm:text-4xl font-extrabold dark:text-slate-200">Receive last <span className='text-accent underline'>news</span> <FontAwesomeIcon icon={faFutbol} className='' /></h1>
            <p class="text-lg text-slate-700 dark:text-slate-400">All the latest news.</p>
            <section class="mt-3 max-w-sm sm:mx-auto sm:px-4 mx-auto">
                <h2 class="sr-only">Sign up for our newsletter</h2>
                <form action="/actualites" method="" class="flex flex-wrap -mx-2">
                    <div class="px-2 grow-[9999] basis-64 mt-3">
                        <div class="group relative">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400">
                                <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z"></path>
                                <path d="m6 7 6 5 6-5"></path>
                            </svg>
                            <input name="email_address" type="email" required="" autocomplete="email" aria-label="Email address" class="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white" placeholder="Subscribe via email" />

                        </div>
                    </div>
                    <div class="px-2 grow flex mt-3">
                        <button type="" class="bg-accent flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-base dark:hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base dark:focus:ring-offset-slate-900 dark:focus:ring-primary transition-colors duration-200">Subscribe</button>
                    </div>
                </form>
            </section>
        </header>
    )
}