import {Groups, Lock, Security, VpnLock} from "@mui/icons-material";
import React, {Component} from "react";

export class SectionFour extends Component {
    render() {
        return (
            <div className='w-screen bg-[#00142C] py-32 hidden 2xl:block'>
                <div className='flex flex-row mx-72 bg-[#011936] px-20 py-8 justify-between rounded-xl'>
                    <div className='flex flex-col items-center gap-2 text-white '>
                        <VpnLock style={{ color: '#0EC9AC', fontSize: '4rem' }}></VpnLock>
                        <span className='text-4xl'>3,452 <sup className='text-[#0EC9AC]'>+</sup></span>
                        <span className='text-lg  opacity-65'>Cybersecurity Projects</span>
                    </div>

                    <div className='flex flex-col items-center gap-2 text-white '>
                        <Security style={{ color: '#0EC9AC', fontSize: '4rem' }}></Security>
                        <span className='text-4xl'>3,452 <sup className='text-[#0EC9AC]'>+</sup></span>
                        <span className='text-lg opacity-65'>Cybersecurity Projects</span>
                    </div>

                    <div className='flex flex-col items-center gap-2 text-white '>
                        <Lock style={{ color: '#0EC9AC', fontSize: '4rem' }}></Lock>
                        <span className='text-4xl'>100<sup className='text-[#0EC9AC]'>%</sup></span>
                        <span className='text-lg o opacity-65'>Service Guarantee</span>
                    </div>

                    <div className='flex flex-col items-center gap-2 text-white '>
                        <Groups style={{ color: '#0EC9AC', fontSize: '4rem' }}></Groups>
                        <span className='text-4xl'>85<sup className='text-[#0EC9AC]'>+</sup></span>
                        <span className='text-lg opacity-65'>Team Experts</span>
                    </div>
                </div>
            </div>
        );
    }
}