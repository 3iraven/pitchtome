import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
    return(
        <footer className="bck_brand_blue">
            <Fade triggerOnce delay={500}>
                <div className="font_righteous footer_logo_venue">The Pitch Coach</div>
                <div className="footer_copyright">
                    The Pitch Coach 2021 all rights reserved
                </div>
            </Fade>
        </footer>
    )
}

export default Footer;