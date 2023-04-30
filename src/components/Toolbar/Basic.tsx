import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FormatBold, FormatItalic, FormatUnderlined, FormatStrikethrough } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FORMAT_TEXT_COMMAND, TextFormatType } from 'lexical';
import { useEffect, useState } from 'react';

interface Props {
  selectedFormats: TextFormatType[];
}

export const Basic = (props: Props) => {
  const { selectedFormats } = props;
  const [editor] = useLexicalComposerContext();

  const [formats, setFormats] = useState(() => []);

  useEffect(() => {
    setFormats(selectedFormats);
  }, [selectedFormats]);

  const handleFormat = (_: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting" size="small">
      <ToggleButton value="bold" aria-label="bold" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}>
        <FormatBold />
      </ToggleButton>
      <ToggleButton
        value="italic"
        aria-label="italic"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
      >
        <FormatItalic />
      </ToggleButton>
      <ToggleButton
        value="underline"
        aria-label="underline"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
      >
        <FormatUnderlined />
      </ToggleButton>
      <ToggleButton
        value="strikethrough"
        aria-label="strikethrough"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')}
      >
        <FormatStrikethrough />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
