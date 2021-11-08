import React from 'react';
import './Breadcrumbs.scss';

const Breadcrumbs = ({ categories }) => {
  return (
    <div className="container column breadcrumb-wrapper">
      <div className="row wrap breadcrumb-container">
        {categories?.map((category, index) => {
          const isLastQuestion = categories.length === index + 1;
          return (
            <span key={index} className="breadcrumb-label">
              {isLastQuestion ? `${category}` : ` ${category} >`}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
