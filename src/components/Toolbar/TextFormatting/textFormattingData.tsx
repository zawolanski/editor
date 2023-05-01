import { FormatBold, FormatItalic, FormatStrikethrough, FormatUnderlined } from '@mui/icons-material';
import { TextFormatType } from 'lexical';
import React from 'react';

export interface TextFormattingDataType {
  value: TextFormatType;
  ariaLabel: string;
  icon: React.ReactElement;
}

export const textFormattingData: TextFormattingDataType[] = [
  {
    value: 'bold',
    ariaLabel: 'bold',
    icon: <FormatBold />,
  },
  {
    value: 'italic',
    ariaLabel: 'italic',
    icon: <FormatItalic />,
  },
  {
    value: 'underline',
    ariaLabel: 'underline',
    icon: <FormatUnderlined />,
  },
  {
    value: 'strikethrough',
    ariaLabel: 'strikethrough',
    icon: <FormatStrikethrough />,
  },
];
