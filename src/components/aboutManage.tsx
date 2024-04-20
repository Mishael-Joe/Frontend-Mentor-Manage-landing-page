
const AboutManage = () => {
  return (
    <section>
        <div className=" py-4 px-5 flex flex-col md:flex-row gap-5 md:px-14">
            <div className=" text-center md:text-left flex flex-col gap-4 basis-1/2">
                <h1 className=" font-semibold text-3xl opacity-90">
                    What’s different about Manage?
                </h1>

                <p className=" opacity-65">
                    Manage provides all the functionality your team needs, without 
                    the complexity. Our software is tailor-made for modern digital 
                    product teams. 
                </p>
            </div>

            <div className="basis-2/3 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="flex items-center gap-1 transparents bg-Very-Pale-Red rounded-l-3xl">
                        <span className="md:basis-1/6 flex justify-start">
                            <span className="py-2 px-5 md:px-8 text-slate-100 rounded-3xl md:rounded-3xl bg-Bright-Red">01</span>
                        </span>
                        <span className="opacity-95 basis-5/6 font-semibold">Track company-wide progress</span>
                    </h2>

                    <p className="flex">
                        <span className="md:basis-1/6"></span>
                        <span className="opacity-65 md:basis-5/6">
                             See how your day-to-day tasks fit into the wider vision. Go from 
                            tracking progress at the milestone level all the way done to the 
                            smallest of details. Never lose sight of the bigger picture again.
                        </span>
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="flex items-center gap-1 transparents bg-Very-Pale-Red rounded-l-3xl">
                        <span className="md:basis-1/6 flex justify-start">
                            <span className="py-2 px-5 md:px-8 text-slate-100 rounded-3xl md:rounded-3xl bg-Bright-Red">02</span>
                        </span>
                        <span className="opacity-95 basis-5/6 font-semibold">Advanced built-in reports</span>
                    </h2>

                    <p className="flex">
                        <span className="md:basis-1/6"></span>
                        <span className="opacity-65 md:basis-5/6">
                            Set internal delivery estimates and track progress toward company 
                            goals. Our customisable dashboard helps you build out the reports 
                            you need to keep key stakeholders informed.
                        </span>
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="flex items-center gap-1 transparents bg-Very-Pale-Red rounded-l-3xl">
                        <span className="md:basis-1/6 flex justify-start">
                            <span className="py-2 px-5 md:px-8 text-slate-100 rounded-3xl md:rounded-3xl bg-Bright-Red">03</span>
                        </span>
                        <span className="opacity-95 basis-5/6 font-semibold">Everything you need in one place</span>
                    </h2>

                    <p className="flex">
                        <span className="md:basis-1/6"></span>
                        <span className="opacity-65 md:basis-5/6">
                            Stop jumping from one service to another to communicate, store files, 
                            track tasks and share documents. Manage offers an all-in-one team 
                            productivity solution.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutManage