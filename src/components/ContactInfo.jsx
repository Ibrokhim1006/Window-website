import React, { memo, useState } from 'react';
import { BsTelephone, BsXLg, BsTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import vk from "../assets/vk.svg";
import wh from "../assets/whatsup.svg";
import tg from "../assets/tg.png";

// million-ignore
function ContactInfo() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            {visible && (
                <span className='fixed bottom-[85px] right-8 flex flex-col gap-[5px] z-10 animate-wiggle'>
                    <Link to={"/contact"}>
                        <div  data-tip="Контакт">
                            <span className='rounded-full w-12 bg-white h-12 flex items-center justify-center cursor-pointer'>
                                <BsTelephoneFill className="text-green-700" />
                            </span>
                        </div>
                    </Link>
                    <div  data-tip="Телеграм">
                        <span className='rounded-full w-12 bg-white h-12 flex items-center justify-center cursor-pointer'>
                            <a href='https://t.me/+79626841122' target='_blank'>
                                <img src={tg} alt="vk" className="w-[28px] lg:w-[32px] rounded-full" />
                            </a>
                        </span>
                    </div>
                    <div  data-tip="WhatsApp">
                        <span className='rounded-full w-12 bg-white h-12 flex items-center justify-center cursor-pointer'>
                            <a href='https://wa.me/79626841122' target='_blank'>
                                <img src={wh} alt="wh" className="w-[28px] lg:w-[32px] rounded-full" />
                            </a>
                        </span>
                    </div>
                    <div  data-tip="вКонтакте">
                        <span className='rounded-full w-12 bg-white h-12 flex items-center justify-center cursor-pointer'>
                            <a href='https://vk.com/elitplastspb' target='_blank'>
                                <img src={vk} alt="wh" className="w-[28px] lg:w-[32px] rounded-full" />
                            </a>
                        </span>
                    </div>
                </span>
            )}

            <span class="fixed bottom-8 right-8 flex h-12 w-12 z-10 cursor-pointer" onClick={() => setVisible(!visible)}>
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dfc38e] opacity-75"></span>
                <span class="relative rounded-full h-12 w-12 bg-[#dfc38e] flex items-center justify-center animate-wiggle">
                    {visible ? (
                        <BsXLg className="text-white" />
                    ) : (
                        <BsTelephone className="text-white" />
                    )}
                </span>
            </span>
        </div>
    )
}

export default memo(ContactInfo);