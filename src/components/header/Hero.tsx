
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "../ui/button";

const Hero = () => {

    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Card className="bg-[#d1edff]">
                    <CardContent  className="grid grid-cols-2 p-0">
                     <div className="grid justify-center items-center align-middle">
                     <div>

                            <h1 className="text-5xl font-bold text-[#1961e4] "> Hello Fellow People</h1>
                            <p>You can't Win Unless you Learn How to Lose</p>
                            <p>Benjamin Foster / Soccer Player</p>
                            <Button  variant="outline" className="text-3xl font-bold text-[#1961e4] p-2">BOOK NOW</Button>
            
                        </div>
                     </div>
                   
                        <div >
                            <img src="https://template-kit.evonicmedia.com/layout87/wp-content/uploads/2024/09/FVR-1-1.png" alt="" />
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
};

export default Hero;