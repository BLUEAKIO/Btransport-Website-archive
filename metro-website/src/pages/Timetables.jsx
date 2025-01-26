import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import Timetable from '../components/Timetable';

const Timetables = () => {
  const { t } = useTranslation();

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <h1>{t('timetables.title')}</h1>
        <p>{t('timetables.schedule')}</p>
        <Timetable />
      </Col>
    </Row>
  );
};

export default Timetables;