export default function Footer() {
  return (
    <div class="pt-4 sm:pt-10 lg:pt-12 mt-10">
  <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row">
      <nav class="flex flex-wrap justify-center mx-auto gap-x-4 gap-y-2 md:justify-start md:gap-6">
        <a href="#" class="text-gray-500 transition duration-100 hover:text-accent active:text-indigo-600">Home</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-accent active:text-indigo-600">Result</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-accent active:text-indigo-600">News</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-accent active:text-indigo-600">Connexion</a>
      </nav>
    </div>

    <div class="py-8 text-center text-sm text-gray-400">© 2024 - 
    <span className="text-accent">LBN</span>
    <span className="block mt-2">All rights reserved</span>
    </div>
  </footer>
</div>
  )
}