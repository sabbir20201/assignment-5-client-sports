import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactUsPage = () => {
    return (
        <div className="py-10 text-center">
            <h1 className="TEXT- text-3xl font-bold text-sky-900">HET IN TOUCH</h1>
            <h1 className="p-3">We'd Love to Hear from You</h1>
            <p className="pb-5"> Whether you have questions, feedback, or just want to chat about your favorite sport, feel free to reach out!</p>
            <ContactDetails></ContactDetails>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactUsPage;