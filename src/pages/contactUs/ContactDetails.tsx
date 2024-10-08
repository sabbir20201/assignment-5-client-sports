import { Button } from "@/components/ui/button";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdHelp } from "react-icons/md";
const ContactDetails = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 py-10 grid-cols-1 gap-5">
            <div className=" cursor-pointer overflow-hidden hover:shadow-lg transition transform duration-300 ease-in-out">
                <div className="card bg-base-100 shadow-sm border rounded hover:shadow-2xl hover:scale-105 transition-transform transform duration-30 ease-out">
                    <figure className="pt-3">
                    <MdEmail className="text-sky-900" size={40}  />
                    </figure>
                    <div className="card-body items-center text-center p-2">
                        <h1 className="card-title">Email Address: onlinesports@gmail.com</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, culpa.</p>
                        <div className="card-actions">
                            <Button className="bg-sky-900"> Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden cursor-pointer hover:shadow-lg transition transform duration-300 ease-in-out">
                <div className="card bg-base-100 shadow-sm border rounded hover:shadow-2xl hover:scale-105 transition-transform transform duration-30 ease-out">
                <figure className="pt-3">
                    <FaPhoneVolume className="text-sky-900" size={40} />
                    </figure>
                    <div className="card-body items-center text-center p-2">
                        <h1 className="card-title">Phone Number: =01236547895</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, culpa.</p>
                        <div className="card-actions">
                            <Button className="bg-sky-900"> Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden cursor-pointer hover:shadow-lg transition transform duration-300 ease-in-out">
                <div className="card bg-base-100 shadow-sm border rounded hover:shadow-2xl hover:scale-105 transition-transform transform duration-30 ease-out">
                    <figure className="pt-3">
                    <IoChatbubbleEllipsesSharp className="text-sky-900" size={40} />
                    </figure>
                    <div className="card-body items-center text-center p-2">
                        <h1 className="card-title">Chat with us: onlinesports@gmail.com</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, culpa.</p>
                        <div className="card-actions">
                            <Button className="bg-sky-900"> Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden cursor-pointer hover:shadow-lg transition transform duration-300 ease-in-out">
                <div className="card bg-base-100 shadow-sm border rounded hover:shadow-2xl hover:scale-105 transition-transform transform duration-30 ease-out">
                    <figure className="pt-3">
                    <MdHelp className="text-sky-900" size={40} />
                    </figure>
                    <div className="card-body items-center text-center p-2">
                        <h1 className="card-title">Help center: onlinesports@gmail.com</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, culpa.</p>
                        <div className="card-actions">
                            <Button className="bg-sky-900"> Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;