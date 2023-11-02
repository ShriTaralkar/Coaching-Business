import React from 'react';
// import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaFacebook, MdEmail, BsFillArrowRightCircleFill } from '@react-icons/all-files'
import Map from "./Map";


function Contact() {

    return (
        <section id="contact" className="m-auto p-5 text-center">
            <header className="m-3">
                <h2 className="text-5xl font-bold capitalize">Be a better leader today</h2>
                <h3 className="m-1 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia?</h3>
            </header>
            <div className="flex flex-col-reverse md:flex-row justify-around items-center">
                <div className="left">
                    <Map />
                </div>
                <div className="right my-5 md:w-1/2 text-left">
                    <header>
                        <h4 className="text-3xl text-blue-700 font-bold capitalize cursor-default">Book an appointment now!</h4>
                        <p className="text-blue-300 transition-all duration-300 cursor-pointer hover:text-blue-900">Drop an email and our team will get back to you within a few minutes</p>
                    </header>
                    <form action="/hello" method="POST" className="my-3 text-white">
                        <input className="w-full my-2 p-3 dark:bg-slate-800 rounded-xl transition-all duration-300 focus:ring-4" type="text" required placeholder="Name" />
                        <input className="w-full my-2 p-3 dark:bg-slate-800 rounded-xl transition-all duration-300 focus:ring-4" type="email" required placeholder="Email" />
                        {/* <input className="w-full my-2 p-3 dark:bg-slate-800 rounded-xl transition-all duration-300 focus:ring-4" type="number" placeholder="Phone" /> */}
                        <div class="w-full mt-2 mb-4 border  rounded-xl  dark:bg-slate-700 dark:border-slate-600">
                            <div class="rounded-t-lg dark:bg-slate-800">
                                <label for="comment" class="sr-only">Your comment</label>
                                <textarea id="comment" name="message" rows="5" class="w-full p-2 text-gray-900 rounded-t-xl bg-white  resize-none dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a message..." required></textarea>
                            </div>
                            <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                <button type="submit" class="inline-flex items-center justify-between py-2.5 px-4 text-base font-medium text-center text-white bg-blue-700 rounded-lg transition-all duration-300 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    <span className="mx-1">Send</span>
                                    {/* <BsFillArrowRightCircleFill /> */}
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* <div className="social-media-icons flex flex-wrap justify-center md:justify-start text-2xl">
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://www.linkedin.com/in/yash-kadulkar-b0a877196/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://www.github.com/kadulkaryash71/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://www.youtube.com/channel/UCpbcjE30ZYl2ZNBBSADmj_A" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://twitter.com/kadulkaryash71" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://www.facebook.com/profile.php?id=100004466386662" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="mailto:yashkadulkar@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Contact