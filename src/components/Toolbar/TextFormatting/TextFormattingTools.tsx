import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ToggleButton, ToggleButtonGroup, styled } from '@mui/material';
import { FORMAT_TEXT_COMMAND, TextFormatType } from 'lexical';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { textFormattingData } from '.';

interface Props {
  selectedFormats: TextFormatType[];
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export const TextFormattingTools = (props: Props) => {
  const { selectedFormats } = props;
  const [editor] = useLexicalComposerContext();
  const [t] = useTranslation('toolbar');

  const [formats, setFormats] = useState(() => []);

  useEffect(() => {
    setFormats(selectedFormats);
  }, [selectedFormats]);

  const handleFormat = (_: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };

  return (
    <StyledToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label={t('textFormatting.title')}
      size="small"
    >
      {textFormattingData.map(({ icon, ariaLabel, value }) => (
        <ToggleButton
          value={value}
          aria-label={ariaLabel}
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, value)}
        >
          {icon}
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};
