import React from 'react';
import Section from '../../Components/Section';
import dummyText from './DummyText';

const InfoCard = ({ sections }) => {
  return (
    <div className="Modal">
      {sections.map(
        (section, i) =>
          section !== 'gallery' && (
            <Section
              title={section.toUpperCase()}
              subtitle={dummyText}
              dark={i % 2 === 0 ? false : true}
              id={section}
            />
          )
      )}
    </div>
  );
};

export default InfoCard;
