import { useAppSelector } from "@/redux/hooks";


const WelcomeMessage = () => {

    const user = useAppSelector((store) => store.user.user)
    console.log(user, 'uuuuu');
    if (!user) {
        return <p> </p>
    }
    console.log('name');
    const { name, email } = user
    return (
        <div>
            <h1 className="text-3xl font-bold "> Welcome to MR. {name}</h1>
            <h1 className="text-xl font-bold "> Email: {email}</h1>


        </div>
    );
};

export default WelcomeMessage;