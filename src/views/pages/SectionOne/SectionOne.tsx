import {Component} from "react";
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png'
import a3 from '../../assets/a3.png'
import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.png'
import b3 from '../../assets/b3.png'
import b4 from '../../assets/b4.png'
export class SectionOne extends Component {
    render() {
        return (
            <div className='bg-[#00142C] w-screen h-full px-20 xl:px-72 overflow-hidden  pt-10 xl:pt-0'>

                <div className='w-screen  flex flex-row  flex-wrap gap-11 '>

                    <div className='flex flex-col justify-center w-[26rem] h-[14rem] px-9 gap-5  bg-[#011936] rounded-lg'>
                        <div className='flex flex-row gap-3 items-center'>
                            <img src={a1} className='w-10 h-10'/>
                            <h3 className='text-2xl font-bold  text-white'>Security Services</h3>
                        </div>
                        <p className='text-[1rem] opacity-65 text-white'>
                            Comprehensive Security Services: Expert protection, cutting-edge
                           technology, and unwavering vigilance for your safety and of peace of mind
                        </p>
                    </div>

                    <div className='flex flex-col justify-center w-[26rem] h-[14rem] px-9 gap-5  bg-[#011936] rounded-lg'>
                        <div className='flex flex-row gap-3 items-center'>
                            <img src={a2} className='w-10 h-10'/>
                            <h3 className='text-2xl font-bold  text-white'>Data Privacy</h3>
                        </div>
                        <p className='text-[1rem] opacity-65 text-white'>
                            Imperative in our interconnected world. Guarding personal information, maintaining confidentiality, and ensuring ethical handling of data for trust and security.
                        </p>
                    </div>

                    <div className='flex flex-col justify-center w-[26rem] h-[14rem] px-9 gap-5  bg-[#011936] rounded-lg'>
                        <div className='flex flex-row gap-3 items-center'>
                            <img src={a3} className='w-10 h-10'/>
                            <h3 className='text-2xl font-bold  text-white'>Industry Certified</h3>
                        </div>
                        <p className='text-[1rem] opacity-65 text-white'>
                            Meeting rigorous standards, our professionals are recognized for excellence, reliability,
                             and adherence to industry benchmarks in every endeavor
                        </p>
                    </div>

                </div>

                <div className='mt-32 flex flex-row justify-center'>
                    <h2 className='text-white text-3xl'>Trusted Over<span className='text-[#0EC9AC]'> 2300 +</span> Companies in the World</h2>
                </div>

                <div className='mt-20 flex flex-row flex-wrap justify-around gap-10'>
                    <img className='w-40 h-16 ' src={b1}/>
                    <img  className='w-40 h-16' src={b2}/>
                    <img  className='w-40 h-16' src={b3}/>
                    <img   className='w-40 h-16' src={b4}/>
                </div>
            </div>
        );
    }
}