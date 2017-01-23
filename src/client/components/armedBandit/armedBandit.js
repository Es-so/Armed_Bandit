import React from 'react';

const Fruit = ({ fruit }) => {
  return(
    <i
      style={{ margin: '30px', color: fruit.color }}
      className={`fa fa-${fruit.icon} fa-5x`}
      aria-hidden="true"
    />
  )
};

const AllFruits = ({ fruits }) =>
  <div style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
    { 
      fruits.map(fruit =>
  	    <Fruit key={fruit.id} fruit={fruit} />
      )
    }
  </div>
;

export default AllFruits;
