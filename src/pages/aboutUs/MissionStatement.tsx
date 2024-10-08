import { Button } from "antd";


const MissionStatement = () => {
    return (
        <div>
               <div className="bg-[#d1edff] my-10">
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <img src="https://template-kit.evonicmedia.com/layout87/wp-content/uploads/2024/09/about-us-6.jpg" alt="" />
                </div>
                <div className="py-12 px-6">
                    <h1 className="text- text-5xl font-bold text-[]">Our Common <span className="text-[#1961e4]">Goals</span> </h1>
                    <p className="py-5">Lorem ipsum dolor consectetur adipiscing tempor labore dolore lorem ipsum dolor mediocritatem tempor Lorem ipsum dolor consectetur adipiscing tempor labore dolore lorem ipsum dolor mediocritatem tempor Lorem ipsum dolor consectetur adipiscing.</p>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                        <div className="border border-black">
                            <h1 className="text-3xl font-semibold py-2">Our Vision</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quas?</p>
                        </div>
                        <div className="border border-black">
                            <h1 className="text-3xl font-semibold py-2">Our Mission</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quas?</p>
                        </div>
                   
                    </div>
                    <Button className=" bg-[#1961e4] my-5 w-full">Read moer</Button>

                </div>
            </div>


        </div>
        </div>
    );
};

export default MissionStatement;