
const TeamSection = () => {
    const data = [
        {
            "name": "Alice Johnson",
            "image": "https://template-kit.evonicmedia.com/layout87/wp-content/uploads/2024/09/Gallery.jpg",
            "age": 30,
            "experienceYears": 5
        },
        {
            "name": "Bob Smith",
            "image": "https://template-kit.evonicmedia.com/layout87/wp-content/uploads/2024/09/Gallery-3.jpg",
            "age": 25,
            "experienceYears": 2
        },
        {
            "name": "Charlie Brown",
            "image": "https://template-kit.evonicmedia.com/layout87/wp-content/uploads/2024/09/Gallery-2-1.jpg",
            "age": 35,
            "experienceYears": 10
        }
    ]
    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-4">Meet Our All Team Members</h1>
            <div  className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {
                    data?.map((item) => (
                        <div key={item.age} className="overflow-hidden cursor-pointer hover:shadow-lg transition transform duration-300 ease-in-out">
                            <div className="card bg-base-100 shadow-sm border overflow-hidden rounded hover:shadow-2xl hover:scale-105 transition-transform transform duration-30 ease-out">
                                <figure className=" h-[250px]">
                                    <img
                                        src={item?.image}
                                        alt="Shoes"
                                        className="rounded-sm w-full h-full" />
                                </figure>
                                <div className="card-body items-center text-center p-2">
                                    <h2 className="card-title">Name: {item?.name}</h2>
                                    <p>Experience Years: {item.experienceYears}</p>
                                    <p>Age: {item.age}</p>


                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default TeamSection;