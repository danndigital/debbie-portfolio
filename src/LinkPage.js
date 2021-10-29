function LinkPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="p-6">
        <img
          src="/media/debbie.jpg"
          alt="debbie"
          className="rounded-full h-28 w-28 md:h-36 md:w-36 shadow-2xl border-4 border-orange-400"
        />
      </div>
      <h1 className="font-serif font-extrabold text-3xl lg:text-5xl mb-6 text-teal-600">
        Debbie Dann
      </h1>

      <a
        href="https://dann.digital/"
        className="py-3
              rounded
              shadow-lg
              hover:shadow-2xl
              bg-gradient-to-br
              from-teal-600
              to-teal-800
              hover:from-teal-800 hover:to-teal-600
              text-teal-50
              text-center	
              tracking-wide
              font-bold
              transition
              duration-500
             w-4/5
             mb-6
             sm:w-2/5
             lg:w-1/4"
      >
        Check out my portfolio
      </a>
      <a
        href="https://www.linkedin.com/in/debbiedann/"
        className="py-3
              rounded
              shadow-lg
              hover:shadow-2xl
              bg-gradient-to-br
              from-teal-600
              to-teal-800
              hover:from-teal-800 hover:to-teal-600
              text-teal-50
              text-center	
              tracking-wide
              font-bold
              transition
              duration-500
             w-4/5
             mb-6
             sm:w-2/5
             lg:w-1/4"
      >
        Connect with me on LinkedIn
      </a>
      <a
        href="https://debbiedanndigital.hashnode.dev/"
        className="py-3
              rounded
              shadow-lg
              hover:shadow-2xl
              bg-gradient-to-br
              from-teal-600
              to-teal-800
              hover:from-teal-800 hover:to-teal-600
              text-teal-50
              text-center	
              tracking-wide
              font-bold
              transition
              duration-500
             w-4/5
             mb-6
             sm:w-2/5
             lg:w-1/4"
      >
        Read my blog on Hashnode
      </a>
      <a
        href="https://github.com/hellodeborahuk"
        className="py-3
              rounded
              shadow-lg
              hover:shadow-2xl
              bg-gradient-to-br
              from-teal-600
              to-teal-800
              hover:from-teal-800 hover:to-teal-600
              text-teal-50
              text-center	
              tracking-wide
              font-bold
              transition
              duration-500
             w-4/5
             mb-6
             sm:w-2/5
             lg:w-1/4"
      >
          Find my work on GitHub
      </a>
    </main>
  );
}

export default LinkPage;
