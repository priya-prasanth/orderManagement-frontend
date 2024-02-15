import React from 'react';
import Header from '../components/profileComponents/Header';
import ShopSection from './../components/homeComponents/ShopSection';
import ContactInfo from './../components/homeComponents/ContactInfo';
import CalltoActionSection from './../components/homeComponents/CalltoActionSection';
import Footer from './../components/profileComponents/Footer';

const HomeScreen = () => {
    window.scrollTo(0, 0);
    return (
        <div>
           <Header />
            <ShopSection />
            <CalltoActionSection />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default HomeScreen;