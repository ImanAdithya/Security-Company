import React, { Component } from "react";
import backPic from "../../assets/back.jpg";
import home from "../../assets/Home.png";

export class Home extends Component {
    render() {
        return (
            <div className="relative w-screen h-screen lg:h-[90vh] bg-cover overflow-hidden" style={{ backgroundImage: `url(${backPic})` }}>
                {/* Darken overlay */}
                <div className="absolute inset-0 bg-[#00142C] opacity-95">
                    <div className='w-screen h-full 2xl:h-[70vh] border-3  ml-5 pr-5 lg:pr-0 xl:ml20 lg:ml-20 2xl:ml-72 pt-32  text-white flex flex-row flex-wrap items-center gap-8 mt-12 justify-center 2xl:justify-start'>

                        <div className='w-[45rem] flex flex-col gap-8 '>
                            <div className='text-6xl font-bold flex flex-col gap-3 '>
                                <h1>Professional <span className='text-[#0EC9AC]'>Company</span></h1>
                                <h1>With Reliable Service</h1>
                            </div>
                            <p className='opacity-65 text-[1rem]'>
                                EliteSecurity, we prioritize your safety. Our seasoned professionals leverage state of  art technology, unwavering commitment, and ethical practices to provide top-tier
                                 security solutions. Trust us to safeguard your assets and peace of mind.
                            </p>

                            <div>
                                <button className='px-10 py-4 rounded text-white bg-[#0EC9AC] font-bold'>LEARN MORE</button>
                            </div>
                        </div>

                        <div>
                            <img src={home} className='w-[20rem] xl:w-[50rem]'/>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}
