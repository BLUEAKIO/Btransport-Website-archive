import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';

const ResourceCard = React.memo(({ title, description, link, t }) => {
  return (
    <Card className="resource-card">
      <h3>{title}</h3>
      <p className="resource-meta">{description}</p>
      <Button 
        type="primary" 
        href={link} 
        target="_blank" 
        rel="noreferrer"
        style={{ width: '100%' }}
      >
        {t('company.visit')}
      </Button>
    </Card>
  );
});

ResourceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default ResourceCard;
