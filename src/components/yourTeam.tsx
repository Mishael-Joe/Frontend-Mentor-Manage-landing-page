
const YourTeam = () => {
  return (
    <section className="bg_simplified py-20 px-5 md:px-10 bg-Bright-Red text-Very-Light-Gray md:justify-between">
        <div className="flex flex-col items-center gap-8 md:flex-row">
            <h2 className="basis-1/2 text-4xl text-center font-semibold opacity-90 md:text-left">
                Simplify how your team works today.
            </h2>

            <span className="basis-1/2 flex justify-center">
                <button className="bg-Very-Light-Gray text-Bright-Red hover:text-hover-text hover:bg-Very-Light-Gray hover:shadow-Very-Pale-Red hover:shadow-sm">
                    Get Started
                </button>
            </span>
        </div>
    </section>
  )
}

export default YourTeam