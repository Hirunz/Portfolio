import { t } from 'i18next';
import React from 'react';
import { PageHeading } from '../../Atoms/PageHeading';
import { TestBR } from '../../Temp/ScrollTest';

const getTranslationKey = (key: String) => {
  console.log(key);
  return t(`CONTACT.${key}`);
};
const Contact = () => {
  return (
    <div
      id='contact'
      className='d-flex flex-column align-items-center'
      // style={{ height: '132vh' }}
    >
      <PageHeading title={getTranslationKey('TITLE')} />
      <div
        style={{ width: '70%', minWidth: 380, borderRadius: '0.5rem' }}
        className=' bg-dark  py-5 '
      >
        <p>
          Thanks for stopping by and taking the time to get to know me a bit
          better. I'm excited to connect with others in the software engineering
          community, so feel free to reach out and say hi!
        </p>
        <TestBR />
      </div>
    </div>
  );
};

export default Contact;
