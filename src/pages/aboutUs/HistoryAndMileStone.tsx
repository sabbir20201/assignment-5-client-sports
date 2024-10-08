import { Button } from "@/components/ui/button";

const HistoryAndMileStone = () => {
    return (
        <div>
            <div className="bg-[#d1edff] my-10">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                 
                    <div className="py-12 px-6">

                        <h1 className="text- text-5xl font-bold text-[]">Our  <span className="text-[#1961e4]">Journey</span> </h1>
                        <p>The Rise of Active Sports League</p>
                        <br />
                        <p className="py-2">2010: The Beginning In a small community center, a group of passionate sports enthusiasts gathered to form Active Sports League (ASL). Their mission was simple: to promote sports and physical fitness among local youth. With just a handful of teams and volunteers, ASL hosted its first community soccer tournament.</p>
                        <p className='py-2'>2012: Expanding Horizons Recognizing the growing interest in diverse sports, ASL expanded its offerings to include basketball, volleyball, and swimming. Participation doubled within a year, and the league gained recognition for fostering teamwork and sportsmanship among young athletes.</p>
                        <p className='py-2'>Future Goals : Looking ahead, ASL aims to build a state-of-the-art sports complex that will serve as a hub for training, events, and community engagement. With a commitment to fostering a love for sports and promoting healthy lifestyles, Active Sports League is excited for the future!</p>
                        <Button className=" bg-[#1961e4] my-5 w-full">Read moer</Button>

                    </div>
                    <div>
                        <img src="https://template-kit.evonicmedia.com/layout87/wp-content/uploads/2024/09/about-us-6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HistoryAndMileStone;