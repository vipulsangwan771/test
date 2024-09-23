import React from 'react';
import './County.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import usa from './Assests/usa.svg';
import im from './Assests/im.webp';
import ie from './Assests/ie.svg';
import de from './Assests/de.webp';
import es from './Assests/es.avif';
import fr from './Assests/fr.webp';
import it from './Assests/it.png';
import us from './Assests/us.webp';
import uk from './Assests/unsa.webp';
import { useSelectedImage } from './SelectedImageContext';
const Country = () => {
    const navigate = useNavigate();
    const { setSelectedImage } = useSelectedImage();
    const handleBackClick = () => {
        navigate(-1);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        navigate('/');
    };

    return (
        <>
            <div className="promainaq">
                <h3 onClick={handleBackClick}><FontAwesomeIcon icon={faXmark} /></h3>
            </div>
            <section className='coch'>
                <div>
                    <h1 className='countrhead'>United Kingdom</h1>
                    <div className='unite'>
                        <div className='unite1' onClick={() => handleImageClick(usa)}>
                            <img src={usa} alt="USA" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>united kingdom</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(english)</p>
                            </div>
                        </div>
                        <div className='unite1' onClick={() => handleImageClick(im)}>
                            <img src={im} alt="USA" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>isle of man</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(english)</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <h1 className='countrhead'>Europe</h1>
                    <div className='unite-container'>
                        <div className='unite12' onClick={() => handleImageClick(ie)}>
                            <img src={ie} alt="USA" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>Ireland</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(english)</p>
                            </div>
                        </div>
                        <div className='unite12' onClick={() => handleImageClick(de)}>
                            <img src={de} alt="Germany" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>deutschland</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(deutsch)</p>
                            </div>
                        </div>
                        <div className='unite12' onClick={() => handleImageClick(de)}>
                            <img src={de} alt="Germany" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>germany</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(english)</p>
                            </div>
                        </div>
                        <div className='unite12' onClick={() => handleImageClick(es)}>
                            <img src={es} alt="Germany" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>espana</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(espanol)</p>
                            </div>
                        </div>


                        <div className='unite12' onClick={() => handleImageClick(es)}>
                            <img src={es} alt="USA" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>spain</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(english)</p>
                            </div>
                        </div>
                        <div className='unite12' onClick={() => handleImageClick(fr)}>
                            <img src={fr} alt="Germany" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>france</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(francais)</p>
                            </div>
                        </div>
                        <div className='unite12' onClick={() => handleImageClick(fr)}>
                            <img src={fr} alt="Germany" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>france</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(english)</p>
                            </div>
                        </div>
                        <div className='unite12' onClick={() => handleImageClick(it)}>
                            <img src={it} alt="Germany" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>italy</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(italian)</p>
                            </div>
                        </div>
                        <div className='unite1' style={{ paddingRight: '78px' }} onClick={() => handleImageClick(it)}>
                            <img src={it} alt="Germany" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>italia</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(english)</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <h1 className='countrhead'>North America</h1>
                    <div className='unite'>
                        <div className='unite1' onClick={() => handleImageClick(us)}>
                            <img src={us} alt="USA" />
                            <div>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>united states</p>
                                <p style={{ marginBottom: '1px', color: '#071F60', fontWeight: '600' }}>(english)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Country;
