import illustration from '../assets/illustration-intro.svg'

const Header = () => {
  return (
    <section className='flex flex-col-reverse py-8 px-5 md:flex-row md:justify-center md:items-center lg:justify-around'>
        <div className='text-center flex flex-col gap-4 items-center md:items-start md:text-left md:w-1/3'>
            <h1 className=' text-4xl lg:text-6xl font-bold opacity-80'>Bring everyone together to build better products.</h1>

            <p className=' opacity-65'>
                Manage makes it simple for software teams to plan day-to-day 
                tasks while keeping the larger team goals in view.
            </p>

            <button className='hover:shadow-Very-Pale-Red hover:shadow-xl w-36'>
                Get Started
            </button>
        </div>

        <div>
            <img src={illustration} alt="svg illustration" />
        </div>
    </section>
  )
}

export default Header