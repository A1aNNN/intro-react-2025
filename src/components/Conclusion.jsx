import React, { useState } from 'react';

const Conclusion = () => {

  const [rejections, setRejections] = useState(0);

  const increaseRejections = () => {
    setRejections(rejections + 1);
  }

  return (
    <div className="conclusion">
      <div className='rejection-counter'>
        <p>
            Number of job applications rejected: <span>{rejections}</span>
        </p>
        <button onClick={increaseRejections} >
            another one
        </button>
      </div>

      <p>Thanks for checking out my corner of the internet! Please connect if you can give me a referral. <span className="ciao">Ciao 👋</span></p>
    </div>
  );
};

export default Conclusion;
