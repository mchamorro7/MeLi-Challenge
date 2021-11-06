import React from 'react';
import './Breadcrumbs.scss';

const Breadcrumbs = ({ categories }) => {
  console.log(categories);
  return (
    <div className="container column breadcrumb-wrapper">
      <div className="row wrap breadcrumb-container">
        {categories?.map((category, index) => {
          const isLastQuestion = categories.length === index + 1;
          console.log(category);
          return (
            <span key={index} style={{ marginRight: 5 }} className="breadcrumb-label">
              {isLastQuestion ? `${category}` : ` ${category} >`}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
