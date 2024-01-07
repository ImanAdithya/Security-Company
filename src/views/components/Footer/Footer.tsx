import {Component} from "react";
import backPic from "../../assets/back.jpg";

export class Footer extends Component {
    render() {
        return (
            <div className='w-screen h-[50vh]  bg-[#00142C] px:10 xl:px-72'>

                <div className=" relative w-full h-[80vw] xl:h-[20vw]  bg-cover overflow-hidden" style={{ backgroundImage: `url(${backPic})` }}>
                    {/* Darken overlay */}
                    <div className="absolute  inset-0 bg-[#00142C] opacity-[96%] flex flex-col justify-center items-center gap-10">
                        <div className='text-white px-[15rem] flex flex-col gap-5'>
                            <h1 className='text-4xl font-bold text-center'>Subscribe Our Newsletter</h1>
                            <p className='opacity-65 text-[1rem] text-center'>Subscribe to our newsletter and be the first to receive updates, exclusive content, promotions, and valuable insights. Join our community for a curated experience tailored to your interests and needs.</p>
                        </div>

                            <div className="relative flex w-full max-w-[24rem]">
                                <div className="relative h-10 w-full min-w-[200px]">
                                    <input type="email"
                                           className="peer h-full w-full rounded-[7px] border border-white bg-white px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                           placeholder=" " value="" />
                                    <label
                                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Email Address
                                    </label>
                                </div>
                                <button disabled
                                        className="!absolute right-1 top-1 select-none rounded bg-blue-950 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button">
                                    SUBSCRIBE
                                </button>
                            </div>
                    </div>
                </div>

                <footer className=" text-center  lg:text-left bg-[#00142C]">
                    <div className="p-4 text-center text-white">
                        © 2024 Copyright:
                        <a
                            className="text-neutral-80"
                            href="https://tw-elements.com/"
                        >.Cryptiva</a
                        >
                    </div>
                </footer>
            </div>
        );
    }
}