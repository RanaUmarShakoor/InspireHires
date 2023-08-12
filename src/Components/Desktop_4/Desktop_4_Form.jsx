import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from '../Layout/FileUpload'
// import { Checkbox } from "@material-tailwind/react";


export function Desktop_4_Form() {
  const navigate = useNavigate();
  let inputClasses = "flex-1 h-10 border border-[#D0D0D2] rounded-lg px-6";

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [field, setField] = useState("");
  const [aboutYou, setAboutYou] = useState("");
  const [videoLink, setVideoLink] = useState("");

  function fnameHandler(event) {
    setFname(event.target.value);
  }

  function lnameHandler(event) {
    setLname(event.target.value);
  }

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function fieldHandler(event) {
    setField(event.target.value);
  }

  function aboutYouHandler(event) {
    setAboutYou(event.target.value);
  }

  function videoLinkHandler(event) {
    setVideoLink(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const newData = {
      first_name: fname,
      last_name: lname,
      email: email,
      field: field,
      about: aboutYou,
      videoLink: videoLink,
    };

    console.log(newData);
    navigate('/');
  }

  return (
    <main className="p-16 xl:px-32 rounded-lg">
      <section className="flex flex-col gap-y-10 p-16 border rounded-[40px] shadow-lg">
        <h1 className="text-xl xxs:text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
          Inspire Candidate Intake Form
        </h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-y-10 text-[#383838]"
        >
          <div>
            <label className="text-xl font-semibold">Your Information</label>
            <div className="flex flex-col gap-y-4 pt-2">
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  value={fname}
                  onChange={fnameHandler}
                  className={inputClasses}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lname}
                  onChange={lnameHandler}
                  className={inputClasses}
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={emailHandler}
                  className={inputClasses}
                  required
                />
                <input
                  type="text"
                  placeholder="Industry / Field"
                  value={field}
                  onChange={fieldHandler}
                  className={inputClasses}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <label className="text-xl font-semibold">About You</label>
            <textarea
              value={aboutYou}
              onChange={aboutYouHandler}
              placeholder="Tell us a bit more about yourself"
              className="h-36 w-full mt-2 pt-2 border border-[#D0D0D2] rounded-lg px-4"
              required
            ></textarea>
          </div>
          <div>
            <label className="text-base font-semibold block">
              Please include a 1 minute video introducing yourself and put the
              unlisted YouTube link here:
            </label>
            <input
              type="text"
              value={videoLink}
              onChange={videoLinkHandler}
              className="w-[50%] h-10 mt-2 border border-[#D0D0D2] rounded-lg px-6"
              required
            />
          </div>
          <div>
            <label className="text-xl font-semibold">
              Upload CV / Resume here:
            </label>
            {/* <input
              placeholder="Click to choose a file or drag here"
              className="w-full h-24 border border-[#D0D0D2] rounded-lg px-6 text-center"
            /> */}
            <FileUpload message="Click to choose a file or drag here" />
          </div>
          <div>
            {/* <Checkbox
              color="blue"
              label="Get the latest about open positions and company news in your
              inbox? Sign me up!"
            /> */}
            <input type="checkbox" name="latestUpdatesCheck" id="latestUpdatesCheck" />
            <label htmlFor="latestUpdatesCheck">Get the latest about open positions and company news in your
              inbox? Sign me up!</label>
          </div>
          <button className="w-28 h-10 text-xs xxs:text-sm font-bold rounded-[20px] text-white bg-[#33B2C7]">
            Get Started
          </button>
        </form>
      </section>
    </main>
  );
}
