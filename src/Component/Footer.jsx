import React from 'react'
import loggo from './Assests/logo.svg'
import utube from './Assests/utube.svg'
import './Footer.css';
import applepy from './Assests/applepy.svg'
import Accordion from 'react-bootstrap/Accordion';


const Footer = () => {
    return (
        <>

            <section className='mpds' style={{ paddingTop: '71px', paddingBottom: '44px' }}>
                <div>
                    <div className='disflds w-100' >
                        <div className='aswsaaq '>
                            <div style={{ maxWidth: '431px' }}>
                                <img src={loggo} width={210} height={50} alt="" />
                            </div>
                            <p className='parsty' >Lovingly delivered from our home in the English Lake District, Kendamil
                                is a family owned British brand with over 60 years experience in making
                                baby formula. With our range of classic, organic and goat formula as well
                                as weaning and supplements, we're here for families every step of the way.</p>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div>
                                    <p style={{cursor:'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M6.00072 9C6.00072 7.34321 7.3435 5.99976 9.00036 5.99976C10.6572 5.99976 12.0007 7.34321 12.0007 9C12.0007 10.6568 10.6572 12.0002 9.00036 12.0002C7.3435 12.0002 6.00072 10.6568 6.00072 9ZM4.37878 9C4.37878 11.5524 6.44786 13.6214 9.00036 13.6214C11.5529 13.6214 13.6219 11.5524 13.6219 9C13.6219 6.4476 11.5529 4.37861 9.00036 4.37861C6.44786 4.37861 4.37878 6.4476 4.37878 9ZM12.7249 4.19537C12.7248 4.40897 12.788 4.6178 12.9066 4.79546C13.0252 4.97311 13.1939 5.1116 13.3912 5.19342C13.5885 5.27525 13.8057 5.29672 14.0152 5.25513C14.2247 5.21354 14.4172 5.11076 14.5683 4.95978C14.7194 4.8088 14.8223 4.6164 14.8641 4.40692C14.9059 4.19744 14.8846 3.98028 14.8029 3.7829C14.7212 3.58552 14.5829 3.4168 14.4053 3.29805C14.2277 3.17931 14.0189 3.11589 13.8053 3.1158H13.8049C13.5186 3.11593 13.244 3.2297 13.0415 3.43212C12.839 3.63454 12.7251 3.90905 12.7249 4.19537ZM5.36421 16.3258C4.48672 16.2858 4.00977 16.1397 3.69281 16.0162C3.2726 15.8526 2.97278 15.6578 2.65755 15.343C2.34233 15.0282 2.1472 14.7287 1.98433 14.3085C1.86077 13.9917 1.7146 13.5146 1.67472 12.6372C1.63108 11.6885 1.62237 11.4035 1.62237 9.00007C1.62237 6.59664 1.6318 6.31246 1.67472 5.36299C1.71468 4.48553 1.86192 4.00939 1.98433 3.69166C2.14792 3.27146 2.34276 2.97166 2.65755 2.65644C2.97235 2.34122 3.27188 2.1461 3.69281 1.98324C4.00962 1.85969 4.48672 1.71353 5.36421 1.67364C6.31292 1.63001 6.59791 1.6213 9.00036 1.6213C11.4028 1.6213 11.6881 1.63073 12.6376 1.67364C13.5151 1.7136 13.9912 1.86084 14.309 1.98324C14.7292 2.1461 15.029 2.34166 15.3442 2.65644C15.6595 2.97122 15.8539 3.27146 16.0175 3.69166C16.141 4.00846 16.2872 4.48553 16.3271 5.36299C16.3707 6.31246 16.3794 6.59664 16.3794 9.00007C16.3794 11.4035 16.3707 11.6877 16.3271 12.6372C16.2871 13.5146 16.1402 13.9915 16.0175 14.3085C15.8539 14.7287 15.659 15.0285 15.3442 15.343C15.0294 15.6575 14.7292 15.8526 14.309 16.0162C13.9922 16.1397 13.5151 16.2859 12.6376 16.3258C11.6889 16.3694 11.4039 16.3781 9.00036 16.3781C6.59683 16.3781 6.31264 16.3694 5.36421 16.3258ZM5.28969 0.054504C4.33155 0.098136 3.67683 0.250056 3.10505 0.472536C2.5129 0.702288 2.01162 1.01052 1.51069 1.51063C1.00977 2.01074 0.702316 2.5128 0.472555 3.10493C0.250066 3.67704 0.0981399 4.33138 0.0545062 5.28948C0.0101524 6.2491 0 6.55589 0 9C0 11.4441 0.0101524 11.7509 0.0545062 12.7105C0.0981399 13.6687 0.250066 14.323 0.472555 14.8951C0.702316 15.4868 1.00984 15.9895 1.51069 16.4894C2.01154 16.9893 2.5129 17.2971 3.10505 17.5275C3.67791 17.7499 4.33155 17.9019 5.28969 17.9455C6.24985 17.9891 6.55615 18 9.00036 18C11.4446 18 11.7514 17.9898 12.711 17.9455C13.6692 17.9019 14.3235 17.7499 14.8957 17.5275C15.4875 17.2971 15.9891 16.9895 16.49 16.4894C16.991 15.9893 17.2978 15.4868 17.5282 14.8951C17.7507 14.323 17.9033 13.6686 17.9462 12.7105C17.9898 11.7502 18 11.4441 18 9C18 6.55589 17.9898 6.2491 17.9462 5.28948C17.9026 4.3313 17.7507 3.67668 17.5282 3.10493C17.2978 2.51316 16.9902 2.01154 16.49 1.51063C15.9899 1.00973 15.4875 0.702288 14.8964 0.472536C14.3235 0.250056 13.6692 0.097416 12.7117 0.054504C11.7521 0.010872 11.4453 0 9.00108 0C6.55687 0 6.24985 0.010152 5.28969 0.054504Z" fill="#071F60"></path>
                                        </svg>
                                    </p>
                                </div>
                                <div>
                                    <p style={{cursor:'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                                            <path d="M9.32105 10.1244L9.84737 6.86829H6.60526V4.75184C6.60526 3.8615 7.05789 2.99152 8.50526 2.99152H10V0.218768C9.12954 0.0836106 8.24998 0.0104911 7.36842 0C4.7 0 2.95789 1.5619 2.95789 4.38553V6.86829H0V10.1244H2.95789V18H6.60526V10.1244H9.32105Z" fill="#071F60"></path>
                                        </svg>
                                    </p>
                                </div>
                                <div>
                                    <p style={{cursor:'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                            <path d="M18.9155 1.92204C18.3009 2.19225 17.6548 2.38041 16.9931 2.48186C17.3024 2.42769 17.7576 1.85884 17.9388 1.62859C18.2141 1.28128 18.4239 0.884795 18.5575 0.459281C18.5575 0.427678 18.5885 0.382531 18.5575 0.359957C18.5419 0.351264 18.5245 0.346708 18.5067 0.346708C18.4889 0.346708 18.4715 0.351264 18.4559 0.359957C17.7374 0.757441 16.9727 1.06081 16.1799 1.2629C16.1523 1.27152 16.1229 1.27229 16.0948 1.26513C16.0668 1.25798 16.0412 1.24316 16.0208 1.22226C15.9591 1.1472 15.8927 1.07632 15.8219 1.01007C15.4986 0.714112 15.1317 0.47188 14.7348 0.292237C14.1989 0.0676658 13.6201 -0.029591 13.0421 0.00781131C12.4813 0.0439956 11.9337 0.197671 11.4335 0.459281C10.9409 0.735093 10.5079 1.10979 10.1607 1.56087C9.79542 2.02513 9.53171 2.56393 9.3873 3.14101C9.26822 3.68993 9.25471 4.25726 9.34752 4.81144C9.34752 4.90625 9.34752 4.9198 9.26797 4.90625C6.11695 4.43221 3.53161 3.28999 1.41914 0.838515C1.32634 0.730162 1.27772 0.730162 1.20259 0.838515C0.28336 2.26516 0.729718 4.5225 1.87876 5.63763C2.03344 5.78662 2.19253 5.93109 2.36047 6.06653C1.83364 6.02832 1.31968 5.88247 0.849041 5.63763C0.760653 5.57894 0.71204 5.61054 0.707621 5.7189C0.695093 5.86911 0.695093 6.02015 0.707621 6.17037C0.799834 6.89028 1.07756 7.57225 1.51239 8.14655C1.94723 8.72086 2.52357 9.16688 3.18248 9.439C3.3431 9.50929 3.51048 9.56225 3.68187 9.59702C3.19416 9.69511 2.69395 9.71036 2.20137 9.64217C2.09531 9.61959 2.05553 9.67828 2.09531 9.78212C2.74496 11.588 4.15474 12.1388 5.18888 12.4458C5.3303 12.4684 5.47172 12.4684 5.63082 12.5045C5.63082 12.5045 5.63082 12.5045 5.6043 12.5316C5.29936 13.1004 4.06636 13.4842 3.50067 13.6828C2.46816 14.0617 1.36731 14.2065 0.274521 14.1072C0.102165 14.0801 0.0623902 14.0846 0.0181963 14.1072C-0.0259975 14.1298 0.0181963 14.1794 0.0668096 14.2246C0.287779 14.3736 0.508748 14.5045 0.738557 14.6309C1.4227 15.0121 2.14597 15.3149 2.89522 15.5338C6.77544 16.6264 11.1418 15.8228 14.0542 12.8657C16.3434 10.5451 17.1477 7.34419 17.1477 4.13875C17.1477 4.01686 17.2936 3.94462 17.3776 3.88142C17.9567 3.42042 18.4673 2.87599 18.8934 2.26516C18.9672 2.1741 19.005 2.05817 18.9995 1.9401C18.9995 1.87238 18.9995 1.88592 18.9155 1.92204Z" fill="#071F60"></path>
                                        </svg>
                                    </p>
                                </div>
                                <div>
                                    <p style={{cursor:'pointer'}}>
                                        <img style={{ cursor: 'pointer' }} src={utube} width={30} height={30} alt="" />
                                    </p>
                                </div>
                            </div>
                            <div className='maras w-100'>
                               <a href="#">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_5334_820)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3773 2.61375C13.6854 0.929088 11.4353 0.000854727 9.0378 0C4.09755 0 0.076923 3.99799 0.075204 8.91224C0.0743445 10.4832 0.487323 12.0166 1.2716 13.3679L0 17.9869L4.75118 16.7475C6.06015 17.4578 7.53415 17.8317 9.03395 17.8322H9.0378C13.9772 17.8322 17.9983 13.8337 18 8.9195C18.0009 6.53783 17.0696 4.29885 15.3773 2.61418V2.61375ZM9.0378 16.327H9.0348C7.6983 16.3266 6.3872 15.9693 5.24325 15.2945L4.97121 15.1338L2.1517 15.8693L2.90417 13.1354L2.72712 12.8551C1.98152 11.6756 1.58745 10.3123 1.58831 8.91269C1.59003 4.82836 4.93167 1.50517 9.04085 1.50517C11.0305 1.50603 12.9008 2.27742 14.3073 3.67789C15.7138 5.07794 16.4878 6.93955 16.4869 8.91865C16.4852 13.0034 13.1435 16.3266 9.0378 16.3266V16.327ZM13.1238 10.779C12.8999 10.6674 11.7989 10.1289 11.5935 10.0546C11.3881 9.9802 11.239 9.94306 11.0898 10.1661C10.9407 10.3892 10.5114 10.8909 10.3808 11.0392C10.2501 11.1879 10.1194 11.2063 9.89555 11.0948C9.6717 10.9832 8.95015 10.7482 8.09455 9.9896C7.4289 9.39898 6.97935 8.66993 6.84875 8.44682C6.7181 8.22376 6.835 8.10323 6.9467 7.99255C7.04725 7.89255 7.1706 7.73229 7.28275 7.60237C7.39495 7.47244 7.4319 7.3793 7.50665 7.23098C7.58145 7.08225 7.54405 6.95238 7.4882 6.8408C7.4323 6.72927 6.98455 5.63306 6.7976 5.18733C6.6158 4.75314 6.43105 4.81212 6.29395 4.80485C6.1633 4.79844 6.0142 4.79716 5.86465 4.79716C5.7151 4.79716 5.4727 4.85272 5.2673 5.0758C5.0619 5.29886 4.48346 5.83777 4.48346 6.93353C4.48346 8.02929 5.2858 9.08876 5.39795 9.23748C5.5101 9.3862 6.9772 11.6354 9.22345 12.6004C9.75765 12.8299 10.1749 12.9671 10.5002 13.0696C11.0366 13.2393 11.5247 13.2154 11.9106 13.1581C12.3408 13.094 13.2355 12.6192 13.422 12.0991C13.6085 11.579 13.6085 11.1328 13.5527 11.0401C13.4968 10.9473 13.3473 10.8913 13.1234 10.7798L13.1238 10.779Z" fill="#071F60"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5334_820">
                                                <rect width="18" height="18" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>available 24/7 on whatsapp</p>
                                    </a>
                            </div>
                        </div>

                        <div className='w-100 fthea' >
                            <div >
                                <div className='fothead'>
                                    <h2>Kendamil</h2>
                                    <p> <a href="#">Healthcare <br /> Professionals</a>  </p>
                                    <p>  <a href="#">Shop</a>  </p>
                                    <p> <a href="#">learn</a>  </p>
                                    <p> <a href="#">about</a>  </p>
                                    <p> <a href="#">Stockists</a>  </p>
                                    <p>  <a href="#">Terms of Service</a>  </p>
                                    <p>  <a href="#">Refund policy</a>  </p>
                                </div>
                            </div>
                            <div className='fothead '>
                                <h2>Customer care</h2>
                                <p>  <a href="#">FAQs</a>  </p>
                                <p>  <a href="#">Delivery</a>  </p>
                                <p> <a href="#">Returns</a>  </p>
                                <p>  <a href="#">Contact</a>  </p>
                            </div>
                            <div className='fothead '>
                                <h2>Main menu</h2>
                                <p>  <a href="#">About</a>  </p>
                                <p>  <a href="#">Shop</a>  </p>
                                <p>  <a href="#">Blog</a>  </p>
                                <p>  <a href="#">Reviews</a>  </p>
                                <p>  <a href="#">Stockists</a>  </p>
                                <p>  <a href="#">Build Your Bundle</a>  </p>
                            </div>
                        </div>

                        <Accordion className='w-100 diblonon'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>  <h2 className='acorhe'>Kendamil</h2></Accordion.Header>
                                <Accordion.Body>
                                <p className='acorpara'> <a href="#">Healthcare Professionals</a>  </p>
                                    <p className='acorpara'>  <a href="#">Shop</a>  </p>
                                    <p className='acorpara'> <a href="#">learn</a>  </p>
                                    <p className='acorpara'> <a href="#">about</a>  </p>
                                    <p className='acorpara'> <a href="#">Stockists</a>  </p>
                                    <p className='acorpara'>  <a href="#">Terms of Service</a>  </p>
                                    <p className='acorpara'>  <a href="#">Refund policy</a>  </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h2 className='acorhe'>Customer care</h2></Accordion.Header>
                                <Accordion.Body>
                                <p className='acorpara'>  <a href="#">FAQs</a>  </p>
                                <p className='acorpara'>  <a href="#">Delivery</a>  </p>
                                <p className='acorpara'> <a href="#">Returns</a>  </p>
                                <p className='acorpara'>  <a href="#">Contact</a>  </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><h2 className='acorhe'>Main menu</h2></Accordion.Header>
                                <Accordion.Body>
                                <p className='acorpara'>  <a href="#">About</a>  </p>
                                <p className='acorpara'>  <a href="#">Shop</a>  </p>
                                <p className='acorpara'>  <a href="#">Blog</a>  </p>
                                <p className='acorpara'>  <a href="#">Reviews</a>  </p>
                                <p className='acorpara'>  <a href="#">Stockists</a>  </p>
                                <p className='acorpara'>  <a href="#">Build Your Bundle</a>  </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>



                        <div className=' theaf'>
                            <h2>join the Kendamil family</h2>
                            <p>Sign up to our newsletter for the latest news, advice and exclusive offers!</p>
                            <div className='styinp'>
                                <form action="submit">
                                    <input placeholder='Enter Your Email' type="text" required />
                                    <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32" /></svg></button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <p className='texxent' >© 2024<a href='#'>  Kendamil</a> | <a href='#'>Terms</a> | <a href='#'>Privacy</a></p>
                    <div className=' gdh'>
                        <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24"><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"></path><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"></path><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"></path><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"></path><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"></path><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"></path><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"></path></svg>
                        <img src={applepy} width="38" height="24" alt="" />
                        <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-diners_club"><title id="pi-diners_club">Diners Club</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z" fill="#3086C8"></path></svg>
                        <svg class="icon icon--full-color" viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-discover" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-discover">Discover</title><path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"></path><path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231F20"></path><path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint0_linear)"></path><path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint1_linear)"></path><path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z" fill="#231F20"></path><path d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z" fill="#231F20"></path><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"></path><defs><linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse"><stop stop-color="#F89F20"></stop><stop offset=".25" stop-color="#F79A20"></stop><stop offset=".533" stop-color="#F68D20"></stop><stop offset=".62" stop-color="#F58720"></stop><stop offset=".723" stop-color="#F48120"></stop><stop offset="1" stop-color="#F37521"></stop></linearGradient><linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse"><stop stop-color="#F58720"></stop><stop offset=".359" stop-color="#E16F27"></stop><stop offset=".703" stop-color="#D4602C"></stop><stop offset=".982" stop-color="#D05B2E"></stop></linearGradient></defs></svg>
                        <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-google_pay"><title id="pi-google_pay">Google Pay</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path><path d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z" fill="#5F6368"></path><path d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z" fill="#4285F4"></path><path d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z" fill="#34A853"></path><path d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z" fill="#FBBC04"></path><path d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z" fill="#EA4335"></path></svg>
                        <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-maestro"><title id="pi-maestro">Maestro</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#00A2E5" cx="23" cy="12" r="7"></circle><path fill="#7375CF" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                        <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                        <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>
                        <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-shopify_pay"><title id="pi-shopify_pay">Shop Pay</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000"></path><path d="M35.889 0C37.05 0 38 .982 38 2.182v19.636c0 1.2-.95 2.182-2.111 2.182H2.11C.95 24 0 23.018 0 21.818V2.182C0 .982.95 0 2.111 0H35.89z" fill="#5A31F4"></path><path d="M9.35 11.368c-1.017-.223-1.47-.31-1.47-.705 0-.372.306-.558.92-.558.54 0 .934.238 1.225.704a.079.079 0 00.104.03l1.146-.584a.082.082 0 00.032-.114c-.475-.831-1.353-1.286-2.51-1.286-1.52 0-2.464.755-2.464 1.956 0 1.275 1.15 1.597 2.17 1.82 1.02.222 1.474.31 1.474.705 0 .396-.332.582-.993.582-.612 0-1.065-.282-1.34-.83a.08.08 0 00-.107-.035l-1.143.57a.083.083 0 00-.036.111c.454.92 1.384 1.437 2.627 1.437 1.583 0 2.539-.742 2.539-1.98s-1.155-1.598-2.173-1.82v-.003zM15.49 8.855c-.65 0-1.224.232-1.636.646a.04.04 0 01-.069-.03v-2.64a.08.08 0 00-.08-.081H12.27a.08.08 0 00-.08.082v8.194a.08.08 0 00.08.082h1.433a.08.08 0 00.081-.082v-3.594c0-.695.528-1.227 1.239-1.227.71 0 1.226.521 1.226 1.227v3.594a.08.08 0 00.081.082h1.433a.08.08 0 00.081-.082v-3.594c0-1.51-.981-2.577-2.355-2.577zM20.753 8.62c-.778 0-1.507.24-2.03.588a.082.082 0 00-.027.109l.632 1.088a.08.08 0 00.11.03 2.5 2.5 0 011.318-.366c1.25 0 2.17.891 2.17 2.068 0 1.003-.736 1.745-1.669 1.745-.76 0-1.288-.446-1.288-1.077 0-.361.152-.657.548-.866a.08.08 0 00.032-.113l-.596-1.018a.08.08 0 00-.098-.035c-.799.299-1.359 1.018-1.359 1.984 0 1.46 1.152 2.55 2.76 2.55 1.877 0 3.227-1.313 3.227-3.195 0-2.018-1.57-3.492-3.73-3.492zM28.675 8.843c-.724 0-1.373.27-1.845.746-.026.027-.069.007-.069-.029v-.572a.08.08 0 00-.08-.082h-1.397a.08.08 0 00-.08.082v8.182a.08.08 0 00.08.081h1.433a.08.08 0 00.081-.081v-2.683c0-.036.043-.054.069-.03a2.6 2.6 0 001.808.7c1.682 0 2.993-1.373 2.993-3.157s-1.313-3.157-2.993-3.157zm-.271 4.929c-.956 0-1.681-.768-1.681-1.783s.723-1.783 1.681-1.783c.958 0 1.68.755 1.68 1.783 0 1.027-.713 1.783-1.681 1.783h.001z" fill="#fff"></path></svg>
                        <svg class="icon icon--full-color" viewBox="-36 25 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-unionpay"><title id="pi-unionpay">Union Pay</title><path fill="#005B9A" d="M-36 46.8v.7-.7zM-18.3 25v24h-7.2c-1.3 0-2.1-1-1.8-2.3l4.4-19.4c.3-1.3 1.9-2.3 3.2-2.3h1.4zm12.6 0c-1.3 0-2.9 1-3.2 2.3l-4.5 19.4c-.3 1.3.5 2.3 1.8 2.3h-4.9V25h10.8z"></path><path fill="#E9292D" d="M-19.7 25c-1.3 0-2.9 1.1-3.2 2.3l-4.4 19.4c-.3 1.3.5 2.3 1.8 2.3h-8.9c-.8 0-1.5-.6-1.5-1.4v-21c0-.8.7-1.6 1.5-1.6h14.7z"></path><path fill="#0E73B9" d="M-5.7 25c-1.3 0-2.9 1.1-3.2 2.3l-4.4 19.4c-.3 1.3.5 2.3 1.8 2.3H-26h.5c-1.3 0-2.1-1-1.8-2.3l4.4-19.4c.3-1.3 1.9-2.3 3.2-2.3h14z"></path><path fill="#059DA4" d="M2 26.6v21c0 .8-.6 1.4-1.5 1.4h-12.1c-1.3 0-2.1-1.1-1.8-2.3l4.5-19.4C-8.6 26-7 25-5.7 25H.5c.9 0 1.5.7 1.5 1.6z"></path><path fill="#fff" d="M-21.122 38.645h.14c.14 0 .28-.07.28-.14l.42-.63h1.19l-.21.35h1.4l-.21.63h-1.68c-.21.28-.42.42-.7.42h-.84l.21-.63m-.21.91h3.01l-.21.7h-1.19l-.21.7h1.19l-.21.7h-1.19l-.28 1.05c-.07.14 0 .28.28.21h.98l-.21.7h-1.89c-.35 0-.49-.21-.35-.63l.35-1.33h-.77l.21-.7h.77l.21-.7h-.7l.21-.7zm4.83-1.75v.42s.56-.42 1.12-.42h1.96l-.77 2.66c-.07.28-.35.49-.77.49h-2.24l-.49 1.89c0 .07 0 .14.14.14h.42l-.14.56h-1.12c-.42 0-.56-.14-.49-.35l1.47-5.39h.91zm1.68.77h-1.75l-.21.7s.28-.21.77-.21h1.05l.14-.49zm-.63 1.68c.14 0 .21 0 .21-.14l.14-.35h-1.75l-.14.56 1.54-.07zm-1.19.84h.98v.42h.28c.14 0 .21-.07.21-.14l.07-.28h.84l-.14.49c-.07.35-.35.49-.77.56h-.56v.77c0 .14.07.21.35.21h.49l-.14.56h-1.19c-.35 0-.49-.14-.49-.49l.07-2.1zm4.2-2.45l.21-.84h1.19l-.07.28s.56-.28 1.05-.28h1.47l-.21.84h-.21l-1.12 3.85h.21l-.21.77h-.21l-.07.35h-1.19l.07-.35h-2.17l.21-.77h.21l1.12-3.85h-.28m1.26 0l-.28 1.05s.49-.21.91-.28c.07-.35.21-.77.21-.77h-.84zm-.49 1.54l-.28 1.12s.56-.28.98-.28c.14-.42.21-.77.21-.77l-.91-.07zm.21 2.31l.21-.77h-.84l-.21.77h.84zm2.87-4.69h1.12l.07.42c0 .07.07.14.21.14h.21l-.21.7h-.77c-.28 0-.49-.07-.49-.35l-.14-.91zm-.35 1.47h3.57l-.21.77h-1.19l-.21.7h1.12l-.21.77h-1.26l-.28.42h.63l.14.84c0 .07.07.14.21.14h.21l-.21.7h-.7c-.35 0-.56-.07-.56-.35l-.14-.77-.56.84c-.14.21-.35.35-.63.35h-1.05l.21-.7h.35c.14 0 .21-.07.35-.21l.84-1.26h-1.05l.21-.77h1.19l.21-.7h-1.19l.21-.77zm-19.74-5.04c-.14.7-.42 1.19-.91 1.54-.49.35-1.12.56-1.89.56-.7 0-1.26-.21-1.54-.56-.21-.28-.35-.56-.35-.98 0-.14 0-.35.07-.56l.84-3.92h1.19l-.77 3.92v.28c0 .21.07.35.14.49.14.21.35.28.7.28s.7-.07.91-.28c.21-.21.42-.42.49-.77l.77-3.92h1.19l-.84 3.92m1.12-1.54h.84l-.07.49.14-.14c.28-.28.63-.42 1.05-.42.35 0 .63.14.77.35.14.21.21.49.14.91l-.49 2.38h-.91l.42-2.17c.07-.28.07-.49 0-.56-.07-.14-.21-.14-.35-.14-.21 0-.42.07-.56.21-.14.14-.28.35-.28.63l-.42 2.03h-.91l.63-3.57m9.8 0h.84l-.07.49.14-.14c.28-.28.63-.42 1.05-.42.35 0 .63.14.77.35s.21.49.14.91l-.49 2.38h-.91l.42-2.24c.07-.21 0-.42-.07-.49-.07-.14-.21-.14-.35-.14-.21 0-.42.07-.56.21-.14.14-.28.35-.28.63l-.42 2.03h-.91l.7-3.57m-5.81 0h.98l-.77 3.5h-.98l.77-3.5m.35-1.33h.98l-.21.84h-.98l.21-.84zm1.4 4.55c-.21-.21-.35-.56-.35-.98v-.21c0-.07 0-.21.07-.28.14-.56.35-1.05.7-1.33.35-.35.84-.49 1.33-.49.42 0 .77.14 1.05.35.21.21.35.56.35.98v.21c0 .07 0 .21-.07.28-.14.56-.35.98-.7 1.33-.35.35-.84.49-1.33.49-.35 0-.7-.14-1.05-.35m1.89-.7c.14-.21.28-.49.35-.84v-.35c0-.21-.07-.35-.14-.49a.635.635 0 0 0-.49-.21c-.28 0-.49.07-.63.28-.14.21-.28.49-.35.84v.28c0 .21.07.35.14.49.14.14.28.21.49.21.28.07.42 0 .63-.21m6.51-4.69h2.52c.49 0 .84.14 1.12.35.28.21.35.56.35.91v.28c0 .07 0 .21-.07.28-.07.49-.35.98-.7 1.26-.42.35-.84.49-1.4.49h-1.4l-.42 2.03h-1.19l1.19-5.6m.56 2.59h1.12c.28 0 .49-.07.7-.21.14-.14.28-.35.35-.63v-.28c0-.21-.07-.35-.21-.42-.14-.07-.35-.14-.7-.14h-.91l-.35 1.68zm8.68 3.71c-.35.77-.7 1.26-.91 1.47-.21.21-.63.7-1.61.7l.07-.63c.84-.28 1.26-1.4 1.54-1.96l-.28-3.78h1.19l.07 2.38.91-2.31h1.05l-2.03 4.13m-2.94-3.85l-.42.28c-.42-.35-.84-.56-1.54-.21-.98.49-1.89 4.13.91 2.94l.14.21h1.12l.7-3.29-.91.07m-.56 1.82c-.21.56-.56.84-.91.77-.28-.14-.35-.63-.21-1.19.21-.56.56-.84.91-.77.28.14.35.63.21 1.19"></path></svg>
                        <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer;