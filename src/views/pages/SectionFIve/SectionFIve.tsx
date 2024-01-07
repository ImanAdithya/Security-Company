import {Component} from "react";
import backPic from "../../assets/back.jpg";
import e1 from "../../assets/e1.png";
import e2 from "../../assets/e2.png";
import e3 from "../../assets/e3.png";
import e4 from "../../assets/e4.png";
import e5 from "../../assets/e5.png";
import e6 from "../../assets/e6.png";
import {ArrowForward} from "@mui/icons-material";

export class SectionFIve extends Component {
    render() {
        return (
            <div className=" relative w-screen h-[255vh] lg:h-screen  bg-cover overflow-hidden" style={{ backgroundImage: `url(${backPic})` }}>
                {/* Darken overlay */}
                <div className="absolute  inset-0 bg-[#00142C] opacity-[96%] flex flex-col items-center gap-20">

                    <div className='text-white flex flex-col items-center gap-2'>
                        <h5 className='text-xl text-[#0EC9AC]'>Our Services</h5>
                        <h2 className='text-[2.5rem] font-bold'>What We Offer</h2>
                    </div>

                    <div className='flex flex-row flex-wrap gap-8 px-72 '>
                        <div className='flex flex-col gap-5 py-12 px-9 bg-[#011936] text-white w-[25rem] justify-center items-center rounded-xl'>
                            <img src={e1} className='w-12 h-12'/>
                            <h2 className='text-3xl'>Network Security</h2>
                            <p className='opacity-65 text-[1rem] text-center'> Securing networks from cyber threats, ensuring data integrity, confidentiality, and availability through advanced protective measures and protocols</p>
                            <div className='flex flex-row gap-3 items-center'>
                                <span className='text-sm font-bold text-[#0EC9AC]'>READ MORE</span>
                                <ArrowForward style={{ color: '#0EC9AC' }}></ArrowForward>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 py-12 px-9 bg-[#011936] text-white w-[25rem] justify-center items-center rounded-xl'>
                            <img src={e2} className='w-12 h-12'/>
                            <h2 className='text-3xl'>Database Security</h2>
                            <p className='opacity-65 text-[1rem] text-center'>
                                Database security involves safeguarding sensitive information, preventing unauthorized access, and ensuring data integrity through robust encryption</p>
                            <div className='flex flex-row gap-3 items-center'>
                                <span className='text-sm font-bold text-[#0EC9AC]'>READ MORE</span>
                                <ArrowForward style={{ color: '#0EC9AC' }}></ArrowForward>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 py-12 px-9 bg-[#011936] text-white w-[25rem] justify-center items-center rounded-xl'>
                            <img src={e3} className='w-12 h-12'/>
                            <h2 className='text-3xl'>Web Security</h2>
                            <p className='opacity-65 text-[1rem] text-center'> Web security shields against online threats, safeguarding data and privacy through encryption, firewalls, and vigilant monitoring protocols.</p>
                            <div className='flex flex-row gap-3 items-center'>
                                <span className='text-sm font-bold text-[#0EC9AC]'>READ MORE</span>
                                <ArrowForward style={{ color: '#0EC9AC' }}></ArrowForward>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 py-12 px-9 bg-[#011936] text-white w-[25rem] justify-center items-center rounded-xl'>
                            <img src={e4} className='w-12 h-12'/>
                            <h2 className='text-3xl'>Locker Security</h2>
                            <p className='opacity-65 text-[1rem] text-center'>Locker Security ensures the protection of personal belongings through advanced locking mechanisms, access controls, and surveillance systems.</p>
                            <div className='flex flex-row gap-3 items-center'>
                                <span className='text-sm font-bold text-[#0EC9AC]'>READ MORE</span>
                                <ArrowForward style={{ color: '#0EC9AC' }}></ArrowForward>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 py-12 px-9 bg-[#011936] text-white w-[25rem] justify-center items-center rounded-xl'>
                            <img src={e5} className='w-12 h-12'/>
                            <h2 className='text-3xl'>Data Security</h2>
                            <p className='opacity-65 text-[1rem] text-center'>Data security safeguards sensitive information through encryption, access controls, and regular audits, ensuring confidentiality, integrity, and availability.</p>
                            <div className='flex flex-row gap-3 items-center'>
                                <span className='text-sm font-bold text-[#0EC9AC]'>READ MORE</span>
                                <ArrowForward style={{ color: '#0EC9AC' }}></ArrowForward>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 py-12 px-9 bg-[#011936] text-white w-[25rem] justify-center items-center rounded-xl'>
                            <img src={e6} className='w-12 h-12'/>
                            <h2 className='text-3xl'>Cloud Security</h2>
                            <p className='opacity-65 text-[1rem] text-center'>Cloud security defends data stored in cloud environments using encryption, access controls, and continuous monitoring measures for protection</p>
                            <div className='flex flex-row gap-3 items-center'>
                                <span className='text-sm font-bold text-[#0EC9AC]'>READ MORE</span>
                                <ArrowForward style={{ color: '#0EC9AC' }}></ArrowForward>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}