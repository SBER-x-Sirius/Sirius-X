import React, { useState, useRef, useEffect, useCallback } from 'react';
import { DropdownContainer, SelectedText, DropdownContent, DropdownOption } from './style';
import { AttendanceUser, AttendanceGroup } from '../../pages/attendance/new-meeting';
import { t } from 'i18next';

type AttendanceSelectorProps = {
  selectItem: AttendanceUser[] | AttendanceGroup[];
  onSelectionChange: (selectedItems: any) => void;
};

export const AttendanceSelector = ({ selectItem, onSelectionChange }: AttendanceSelectorProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const maxWidth = 150;
  const dropdownRef = useRef(null);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const toggleOption = useCallback((event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLElement;

    if (event) {
      const text = target.textContent;
      target.classList.toggle('selected');
      if (selectedOptions.includes(text)) {
        setSelectedOptions(selectedOptions.filter((item) => item !== text));
      } else {
        setSelectedOptions([...selectedOptions, text]);
      }
    }
  }, [selectedOptions]);

  const itsGroup = (): boolean => {
    return !selectItem[0]?.first_name;
  };

  const updateSelectedOptionsText = (): string => {
    const selectedOptionsText = selectedOptions.join(', ');
    onSelectionChange(selectedOptions);
    if (selectedOptionsText.length > maxWidth) {
      return selectedOptionsText.substring(0, maxWidth) + ' ...';
    } else if (selectedOptionsText.length === 0) {
      return itsGroup()
        ? t('attendance:attendanceTranslation.new-meeting.groupSelector')
        : t('attendance:attendanceTranslation.new-meeting.userSelector');
    } else {
      return selectedOptionsText;
    }
  };

  const buildFullName = (user: AttendanceUser): string => {
    return user.middle_name + ' ' + user.first_name + ' ' + user.last_name;
  };

  useEffect(() => {
    function handleClickOutside(event: { target: unknown }) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <SelectedText onClick={toggleDropdown}>{updateSelectedOptionsText()}</SelectedText>
      <DropdownContent isOpen={isOpen}>
        {selectItem.map((item: AttendanceUser & AttendanceGroup) => (
          <DropdownOption key={item.id} onClick={toggleOption}>
            {item.first_name ? buildFullName(item) : item?.title}
          </DropdownOption>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};
