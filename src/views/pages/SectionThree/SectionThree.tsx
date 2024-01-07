import React, {Component} from "react";
import c2 from '../../assets/c2.jpg'
import {VpnLock} from "@mui/icons-material";


export class SectionThree extends Component {
    render() {
        return (
              <div className='flex flex-col  xl:flex-row  bg-[#00142C] '>
                  <div className='w-screen xl:w-[50vw] pl-10 xl:pl-72 pr-8 flex flex-col justify-center gap-8 my-10 xl:my-0'>

                      <div className='flex flex-col gap-3'>
                          <span className='text-[#0EC9AC]  text-xl'>Why Choose Us</span>
                          <div className='text-[2.5rem] text-white font-bold'>
                              <h1>Provide Advanced Security</h1>
                              <h1>for Advanced Threat</h1>
                          </div>

                          <div>
                              <p className='text-white opacity-65 text-[1.1rem]'>Deliver cutting-edge security solutions equipped to counter and neutralize sophisticated threats, ensuring a proactive and resilient defense against evolving risks in the digital landscape.</p>
                          </div>
                      </div>
                      <div className='text-white text-lg opacity-65 flex flex-col gap-1'>
                          <ul className="list-disc" >
                              <li>Content Delivery Network</li>
                          </ul>

                          <ol className="list-disc">
                              <li>Malware Detection Removal</li>
                          </ol>

                          <ul className="list-disc">
                              <li>24/7 Support And Remote Admit</li>
                          </ul>
                      </div>
                      <div>
                          <button className='px-10 py-4 rounded text-white bg-[#0EC9AC] font-bold mt-5'>READ MORE</button>
                      </div>
                  </div>

                  <div className='w-screen xl:w-[50vw] h-[40rem] bg-cover inset-0 bg-[#00142C] opacity-45 rounded-xl' style={{ backgroundImage: `url(${c2})` }}></div>
              </div>
        );
    }
}