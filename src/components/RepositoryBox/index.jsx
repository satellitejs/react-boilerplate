import React from 'react';

const RepositoryBox = ({ repository }) => {
  return (
    <div className="repositoryBox">
      {repository.name}
    </div>
  );
};

export default RepositoryBox;
