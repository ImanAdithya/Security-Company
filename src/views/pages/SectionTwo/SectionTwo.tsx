import React, {Component} from "react";
import c1 from '../../assets/c1.jpg'
import d1 from '../../assets/d1.png'
import d2 from '../../assets/d2.png'


export class SectionTwo extends Component {
    render() {
        return (
            <div className='w-screen h-full bg-[#00142C] pt-[8rem] flex flex-col xl:flex-row '>
                <div className='w-screen xl:w-[50vw] h-[60rem] bg-cover inset-0 bg-[#00142C] opacity-45 rounded-xl' style={{ backgroundImage: `url(${c1})` }}></div>

                <div className='flex flex-col pl-10 pr-10 xl:pl-32 xl:pr-0 w-screen xl:w-[40vw] justify-center gap-16 '>
                    <div className='flex flex-col gap-3'>
                        <span className='text-[#0EC9AC]  text-xl'>Welcome To Cryptiva</span>
                        <div className='text-[2.5rem] text-white font-bold'>
                            <h1>The Perfect Solution For All</h1>
                            <h1>The Protection Question</h1>
                        </div>

                        <div>
                            <p className='text-white opacity-65 text-[1.1rem]'>A comprehensive solution addressing all security queries. Tailored to provide optimal protection,
                                this versatile approach ensures robust safeguards against various threats, offering a perfect answer
                                 to diverse security challenges.</p>
                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-8 '>
                        <div className='flex flex-col text-white gap-4'>
                            <img src={d2} className='w-10 h-10'/>
                            <h3 className='text-2xl'>High Quality Service</h3>
                            <p className='opacity-65'>Exceptional service, exceeding expectations with top-tier quality, reliability, and customer satisfaction guaranteed.</p>
                        </div>
                        <div className='flex flex-col text-white gap-4'>
                            <img src={d1} className='w-10 h-10'/>
                            <h3 className='text-2xl'>Effective Protection</h3>
                            <p className='opacity-65'>Robust defense, proactive measures, and advanced safeguards ensuring comprehensive and effective protection.</p>
                        </div>
                    </div>

                    <div>
                        <button className='px-10 py-4 rounded text-white bg-[#0EC9AC] font-bold'>GET FREE TRIAL</button>
                    </div>
                </div>
            </div>
        );
    }
}