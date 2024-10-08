import { Button } from "@/components/ui/button";


const ContactDetails = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <div className=" cursor-pointer hover:shadow-lg transition transform duration-300 ease-in-out">
                <div className="card bg-base-100 shadow-sm border rounded hover:shadow-2xl hover:scale-105 transition-transform transform duration-30 ease-out">
                    <figure className="">
                        <img
                            src=""
                            alt="Shoes"
                            className="rounded-sm w-full h-full" />
                    </figure>
                    <div className="card-body items-center text-center p-2">
                        <h1 className="card-title">Email Address: onlinesports@gmail.com</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, culpa.</p>
                        <div className="card-actions">
                        <Button> Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" cursor-pointer hover:shadow-lg transition transform duration-300 ease-in-out">
                <div className="card bg-base-100 shadow-sm border rounded hover:shadow-2xl hover:scale-105 transition-transform transform duration-30 ease-out">
                    <figure className="">
                        <img
                            src=""
                            alt="Shoes"
                            className="rounded-sm w-full h-full" />
                    </figure>
                    <div className="card-body items-center text-center p-2">
                        <h1 className="card-title">Phone Number: =01236547895</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, culpa.</p>
                        <div className="card-actions">
                        <Button> Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" cursor-pointer hover:shadow-lg transition transform duration-300 ease-in-out">
                <div className="card bg-base-100 shadow-sm border rounded hover:shadow-2xl hover:scale-105 transition-transform transform duration-30 ease-out">
                    <figure className="">
                        <img
                            src=""
                            alt="Shoes"
                            className="rounded-sm w-full h-full" />
                    </figure>
                    <div className="card-body items-center text-center p-2">
                        <h1 className="card-title">Chat with us: onlinesports@gmail.com</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, culpa.</p>
                        <div className="card-actions">
                        <Button> Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" cursor-pointer hover:shadow-lg transition transform duration-300 ease-in-out">
                <div className="card bg-base-100 shadow-sm border rounded hover:shadow-2xl hover:scale-105 transition-transform transform duration-30 ease-out">
                    <figure className="">
                        <img
                            src=""
                            alt="Shoes"
                            className="rounded-sm w-full h-full" />
                    </figure>
                    <div className="card-body items-center text-center p-2">
                        <h1 className="card-title">Help center: onlinesports@gmail.com</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, culpa.</p>
                        <div className="card-actions">
        <Button> Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;