import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../../../components/sidebar';
import BaseForm from '../../../components/form';
import { AttendanceWrapper } from '../style';
import { SessionButton, SessionFormContent, SessionInput } from './style';
import { useAccessionMutation } from '../../../__data__/services/api/attendance/accession';
import { Alert, Slide, SlideProps } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { TransitionProps } from 'react-transition-group/Transition';

const Accession: React.FC = (): JSX.Element => {
  const [attendanceAccession, { data: attendanceAccessionData, error: attendanceAccessionErrors }] =
    useAccessionMutation();
  const [meetingId, setMeetingId] = useState('');
  const [showCompletedPopup, setShowCompletedPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const { t } = useTranslation();

  const handleMeetingId = (event): void => {
    setShowErrorPopup(false);
    setMeetingId(event.target.value);
  };
  function TransitionUp(props: SlideProps) {
    return <Slide {...props} direction='up' />;
  }

  useEffect(() => {
    if (attendanceAccessionErrors) {
      setShowErrorPopup(true);
    } else if (attendanceAccessionData) {
      setShowCompletedPopup(true);
    }
  }, [attendanceAccessionData, attendanceAccessionErrors]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (meetingId) {
      await attendanceAccession({ meetingId: meetingId ? meetingId : '' });
    }
  };

  return (
    <AttendanceWrapper>
      <Sidebar />
      <BaseForm>
        <SessionFormContent>
          <SessionInput
            onChange={handleMeetingId}
            type='text'
            placeholder={t('attendance:attendanceTranslation.sessionForm.inputPlaceholder')}
            disabled={showCompletedPopup}
          />
          <SessionButton onClick={(e) => handleSubmit(e)} disabled={showCompletedPopup}>
            {t('attendance:attendanceTranslation.sessionForm.btnText')}
          </SessionButton>
        </SessionFormContent>
      </BaseForm>
      {(showCompletedPopup || showErrorPopup) && (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          TransitionComponent={TransitionUp}
          open={showCompletedPopup || showErrorPopup}
          autoHideDuration={6000}
        >
          <Alert severity={showCompletedPopup ? 'success' : 'error'} sx={{ zoom: '1.3' }}>
            {showCompletedPopup
              ? t('attendance:attendanceTranslation.sessionForm.completed')
              : t('attendance:attendanceTranslation.sessionForm.error')}
          </Alert>
        </Snackbar>
      )}
    </AttendanceWrapper>
  );
};

export default Accession;
