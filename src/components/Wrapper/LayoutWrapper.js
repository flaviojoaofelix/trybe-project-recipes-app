import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const LayoutWrapper = ({ title, children }) => (
  <>
    <Header title={ title } />
    <main className="footer-space">
      {children}
    </main>
    <Footer />
  </>
);

LayoutWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LayoutWrapper;
