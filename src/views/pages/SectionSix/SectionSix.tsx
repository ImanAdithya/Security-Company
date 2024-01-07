import {Component} from "react";
import f1 from '../../assets/f1.jpg';
import f2 from '../../assets/f2.jpg';
import f3 from '../../assets/f3.jpg';

export class SectionSix extends Component {
    render() {
        return (
            <div className='w-screen h-full  bg-[#00142C] flex flex-col gap-32 py-16 px-10 lg:px-20 xl:px-72'>
                <div className='text-white flex flex-col items-center gap-2'>
                    <h5 className='text-xl text-[#0EC9AC]'>Our News</h5>
                    <h2 className='text-[2.5rem] font-bold'>Latest News</h2>
                </div>

                <div className='flex flex-row gap-3 justify-around flex-wrap'>

                    <div className='flex flex-col gap-3 w-full xl:w-[20vw] text-white'>
                        <img src={f1} className='rounded-xl'/>
                        <span className='opacity-65 text-[1rem]'>Cloud Security</span>
                        <h3 className='text-2xl'>Five Strategies to Optimize Cloud Security in 2021</h3>
                        <p className='text-[1.1rem] opacity-65'>Implement strong access controls, encryption, regular audits, threat detection, and employee training to enhance cloud security effectively in 2021.</p>
                    </div>

                    <div className='flex flex-col gap-3  w-full xl:w-[20vw] text-white'>
                        <img src={f2} className='rounded-xl'/>
                        <span className='opacity-65 text-[1rem]'>Criminals</span>
                        <h3 className='text-2xl'>Cyber Criminals Publish Stolen Sepa Data</h3>
                        <p className='text-[1.1rem] opacity-65'> Cyber criminals exploit vulnerabilities, publishing stolen SEPA data, posing severe risks to financial institutions, businesses, and individuals. Enhanced cybersecurity is crucial.</p>
                    </div>

                    <div className='flex flex-col gap-3  w-full xl:w-[20vw] text-white'>
                        <img src={f3} className='rounded-xl'/>
                        <span className='opacity-65 text-[1rem]'>Security</span>
                        <h3 className='text-2xl'>The Security Risks Of Changing Package Owners</h3>
                        <p className='text-[1.1rem] opacity-65'>Changing package owners poses security risks, including unauthorized access and potential vulnerabilities. Robust authentication and monitoring are imperative safeguards.</p>
                    </div>

                </div>
            </div>
        );
    }
}