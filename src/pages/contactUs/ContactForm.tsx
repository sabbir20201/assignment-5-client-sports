

const ContactForm = () => {
  
    return (
        <div>
            <div>

                <h1 className="text-3xl font-semibold text-center p-2">Contact us</h1>
                <div className="card bg-base-100 m-auto w-full max-w-md shrink-0 p-0 border">
                    <form className="card-body">
                        <div className="form-control p-0">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">subject</span>
                            </label>
                            <input type="subject" placeholder="subject" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">message</span>
                            </label>
                            <textarea placeholder="message" className="input input-bordered" required />
                        </div>
                      
                        <div className="form-control mt-6">
                            <button className="btn bg-sky-900 text-white">Submit</button>
                        </div>
                    </form>
                </div>


            </div>

        </div>
    );
};

export default ContactForm;