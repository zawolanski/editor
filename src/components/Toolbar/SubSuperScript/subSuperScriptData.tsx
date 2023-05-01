import { Subscript, Superscript } from '@mui/icons-material';
import { TextFormatType } from 'lexical';
import React from 'react';

export interface SubSuperScriptData {
  value: TextFormatType;
  ariaLabel: string;
  icon: React.ReactElement;
}

export const subSuperScriptData: SubSuperScriptData[] = [
  {
    value: 'subscript',
    ariaLabel: 'subscript',
    icon: <Subscript />,
  },
  {
    value: 'superscript',
    ariaLabel: 'superscript',
    icon: <Superscript />,
  },
];
