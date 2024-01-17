import { MenuItem, TextField } from '@mui/material';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AttendanceGroup } from '../../@types/attendance/group';
import { AttendanceUser } from '../../@types/attendance/user';
import { setGroups, setTeachers } from '../../__data__/slices/attendance/new-meeting';
import { buildNameWithInitials } from '../../utils/attendance';

type AttendanceSelectorProps = {
  selectItems: AttendanceUser[] | AttendanceGroup[];
};
type SelectItem = AttendanceUser | AttendanceGroup;

export const AttendanceSelector = ({ selectItems }: AttendanceSelectorProps): JSX.Element => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItems(event.target.value as unknown as string[]);
  };

  function isAttendanceUser(item: SelectItem): item is AttendanceUser {
    return 'userId' in item;
  }

  function isAttendanceGroup(item: SelectItem): item is AttendanceGroup {
    return 'groupId' in item;
  }

  useEffect((): void => {
    isAttendanceGroup(selectItems[0]) ? dispatch(setGroups(selectedItems)) : dispatch(setTeachers(selectedItems));
  }, [selectedItems]);

  return (
    <TextField
      select
      focused
      label={
        isAttendanceUser(selectItems[0]) ? (
          <>{t('attendance:attendanceTranslation.new-meeting.userSelector')}</>
        ) : (
          <>{t('attendance:attendanceTranslation.new-meeting.groupSelector')}</>
        )
      }
      value={selectedItems}
      onChange={handleChange}
      color='info'
      variant='filled'
      SelectProps={{
        multiple: true
      }}
      sx={{ width: '25rem', backgroundColor: 'white', borderRadius: 1 }}
    >
      {selectItems.map((item: SelectItem) =>
        isAttendanceUser(item) ? (
          <MenuItem key={item.userId} value={item.userId} tabIndex={0}>
            {buildNameWithInitials(item)}
          </MenuItem>
        ) : (
          <MenuItem key={item.groupId} value={item.groupId} tabIndex={0}>
            {`${item.name}`}
          </MenuItem>
        )
      )}
    </TextField>
  );
};
