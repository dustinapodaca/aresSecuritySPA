import React from 'react';
import { useEffect, useRef } from 'react';
import { useReducer, useContext } from 'react';

// UI Components
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner'

//Mailgun API
import formData from 'form-data';
import Mailgun from 'mailgun.js';
// import axios from 'axios';
// import ReCAPTCHA from "react-google-recaptcha"

const mg = new Mailgun(formData);
const client = mg.client({username: 'api', key: process.env.REACT_APP_MAILGUN_API_KEY});

// Configured state with useReducer and useContext
const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  successMessage: '',
  errorMessage: '',
  loading: false,
};

function resetFormAction() {
  return {
    type: 'RESET_FORM',
    payload: initialState,
  };
}

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_SUBJECT':
      return { ...state, subject: action.payload };
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    case 'SET_SUCCESS_MESSAGE':
      return { ...state, successMessage: action.payload };
    case 'SET_ERROR_MESSAGE':
      return { ...state, errorMessage: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'RESET_FORM':
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const FormContext = React.createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

const Contact = () => {
  const { state, dispatch } = useContext(FormContext);
  const { name, email, subject, message, successMessage, errorMessage, loading } = state;
  const formRef = useRef(null);
  // const captchaRef = useRef(null);

  useEffect(() => {
    const resetForm = () => {
      formRef.current.reset();
      dispatch(resetFormAction());
    }

    if (successMessage === 'Message sent successfully!') {
      toast.success(`Thank you for reaching out! 🌱 \n\n Your message has been sent successfully and we will be in touch with you shortly.`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });

      resetForm();
    } else if (errorMessage) {
      toast.error((errorMessage), {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });;
      resetForm();
    }
  }, [successMessage, errorMessage, dispatch]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const mailgunRes = await client.messages.create(process.env.REACT_APP_DOMAIN, {
        from: `Ares Security Contact Form Submission <${email}>`,
        to: 'contact@aressecurity.co',
        // to: 'dustin.apodaca@aressecurity.co',
        subject: subject,
        // template: 'arescontact', 'v:name': name, 'v:email': email, 'v:message': message, 'v:subject': subject, 'h:X-Mailgun-Variables': JSON.stringify({name: name, email: email, message: message, subject: subject})
        text: `FROM: ${name}\nREPLY EMAIL: ${email}\n\nMESSAGE:\n${message}\n\n\n© 2023 Ares Security LLC`
      });

      console.log('mailgunRes', mailgunRes);

      if (mailgunRes.status === 200) {
        dispatch({ type: 'SET_SUCCESS_MESSAGE', payload: 'Message sent successfully!' });
        
      } else {
        dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'Failed to send message, please try again or email us directly at: contact@aressecurity.co' });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'Failed to send message, please try again or email us directly at: contact@aressecurity.co' });
    } finally {
      setTimeout(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
      }, 500);
    }
  }

  return (
    <>
      <section id="contact" className="text-gray-400 bg-black body-font relative">
        <div className="container-ares py-16 flex sm:flex-nowrap flex-wrap gap-y-10 sm:gap-x-14">
          <div className="lg:w-1/2 md:w-1/2 min-w-0 bg-odgreen rounded-lg overflow-hidden p-6 flex items-end justify-start relative">
            <iframe id="map" width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589687.5626687733!2d-105.9444551171875!3d38.90435052382222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87134327f4199271%3A0xd2591dd0e6d83a81!2sAres%20Security%20LLC!5e0!3m2!1sen!2sus!4v1664942444750!5m2!1sen!2sus"/>
            <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
              <div className="w-full px-4">
                <span className="title-font font-semibold text-white tracking-widest text-xs">SERVICE AREAS</span>
                <p className="mt-1 text-white">- Denver <br />- Colorado Springs <br /> - Pueblo</p>
              </div>
              <div className="w-full px-4 mt-4">
                <p className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</p>
                <a href="mailto: contact@aressecurity.co" className="text-litegreen leading-relaxed break-words">contact@aressecurity.co</a>
                <p className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</p>
                <p className="leading-relaxed text-litegreen">719-696-3966</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 min-w-0 flex flex-col w-full md:py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light mb-4">
              Request a Quote
            </p>
            <h3 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">
              How Can We Help You?
            </h3>
            <p className="text-pale leading-relaxed mb-6">
              Send a site, a shift pattern and a deadline. We respond within one business day.
            </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-line p-6 flex flex-col gap-4"
              >
                {/* Name and Email share a row: the column is wide enough for two
                    fields, and pairing them removes a full field row from the
                    form's height. They stack again below sm. */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="field-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="field-input"
                      value={name}
                      onChange={(event) => dispatch({ type: 'SET_NAME', payload: event.target.value })}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="field-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="field-input"
                      value={email}
                      onChange={(event) => dispatch({ type: 'SET_EMAIL', payload: event.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="field-label">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="field-input"
                    value={subject}
                    onChange={(event) => dispatch({ type: 'SET_SUBJECT', payload: event.target.value })}
                    required
                  >
                    <option value="" disabled>Choose one.</option>
                    <option value="Quote Inquiry">Get A Quote</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Career Inquiry">Careers</option>
                    <option value="Other Inquiry">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="field-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="field-input h-20 resize-none"
                    value={message}
                    onChange={(event) => dispatch({ type: 'SET_MESSAGE', payload: event.target.value })}
                    required
                  />
                </div>
              {loading ? (
                <div className="mx-5">
                  <ThreeDots
                    height="52"
                    width="80"
                    radius="9"
                    color="#1f1f1f"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                </div>
              ) : (
                <>
                  <div className='flex justify-between'>
                    <button className="inline-flex items-center justify-center rounded-full bg-ink text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-gray-700 focus:outline-none cursor-pointer">Send Request</button>
                    {/* <ReCAPTCHA
                      sitekey={process.env.REACT_APP_SITE_KEY}
                      ref={captchaRef}
                      onChange={(value) => setCaptchaValue(value)}
                    /> */}
                  </div>
                </>
              )}
                <p className="text-xs text-mid mt-1">© 2026 Ares Security LLC</p>
              </form>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

// reCAPTHCA in Progress
  // const setCaptchaValue = (value) => {
  //   captchaRef.current.setValue(value);
  // };

  // const verifyReCaptcha = async (captchaValue) => {
  //   try {
  //     const res = await axios.post('https://6vxi4lo4bcalgcit43rsnraeiy0azzyi.lambda-url.us-west-2.on.aws/', {
  //       token: captchaValue,
  //       secret: process.env.REACT_APP_SECRET_KEY,
  //     });

  //     return res.data.success;

  //   } catch (error) {
  //     console.log('error', error);
  //     return false;
  //   }
  // };

  // const captchaValue = captchaRef.current.getValue();
    
    // if (!captchaValue) {
    //   setErrorMessage('Please complete the reCAPTCHA verification');
    //   return;
    // }

    // const isVerifed = await verifyReCaptcha(captchaValue);

    // if (!isVerifed) {
    //   setErrorMessage('Failed to verify reCAPTCHA, please try again');
    //   return;
    // }