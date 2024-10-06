import { Card } from "@/components/ui/card";
import { Image } from "antd";

interface ImageItem {
    img: string;
    title: string;
}
const Gallery = () => {
    const images: ImageItem[] = [
        {
            img: 'https://template-kit.evonicmedia.com/layout87/wp-content/uploads/2024/09/Gallery-2-1.jpg',
            title: 'ferns'
        },
        {
            img: 'https://template-kit.evonicmedia.com/layout87/wp-content/uploads/2024/09/Gallery-1-1.jpg',
            title: 'ferns'
        },
        {
            img: 'https://template-kit.evonicmedia.com/layout87/wp-content/uploads/2024/09/Gallery.jpg',
            title: 'ferns'
        },
        {
            img: 'https://template-kit.evonicmedia.com/layout87/wp-content/uploads/2024/09/Gallery-4.jpg',
            title: 'spice plants'
        },
        {
            img: 'https://template-kit.evonicmedia.com/layout87/wp-content/uploads/2024/09/Gallery-3.jpg',
            title: 'bamboo plants'
        },
       
    ];
    return (
        <div>
            <div className=' py-11'>
                <h1 className='text-center text-3xl font-bold p-5 '>Our <span className="text-[#1961e4]">Gallery</span> </h1>
                <div className='grid lg:grid-cols-3 justify-items-center md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        images?.map((image, index) => (
                            <div key={index}>
                                <Card className='rounded-none'>
                                    <Image
                                        height={280}
                                        // width={250}
                                        src={image.img}
                                    />
                                    <h1 className='font-semibold text-base text-[#083214] uppercase text-center p-1 '>{image.title}</h1>
                                </Card>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;