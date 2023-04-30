import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import { AppBar, Box, Toolbar as MUIToolbar } from '@mui/material';
import { $getSelection, $isRangeSelection, SELECTION_CHANGE_COMMAND, TextFormatType } from 'lexical';
import { useCallback, useEffect, useState } from 'react';

import { Basic } from './Basic';

export const Toolbar = () => {
  const [editor] = useLexicalComposerContext();

  const [selectedFormats, setSelectedFormats] = useState<TextFormatType[]>([]);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const selected: TextFormatType[] = [];
      if (selection.hasFormat('bold')) selected.push('bold');
      if (selection.hasFormat('italic')) selected.push('italic');
      if (selection.hasFormat('underline')) selected.push('underline');
      if (selection.hasFormat('strikethrough')) selected.push('strikethrough');
      setSelectedFormats(selected);
    }
  }, []);

  useEffect(() => {
    mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar();
          return false;
        },
        1
      )
    );
  }, [editor, updateToolbar]);

  return (
    <Box>
      <AppBar position="sticky" color="default" sx={{ marginBottom: '1.5rem' }}>
        <MUIToolbar>
          <Box display="flex" justifyContent="center" flexGrow={1}>
            <Basic selectedFormats={selectedFormats} />
          </Box>
        </MUIToolbar>
      </AppBar>
    </Box>
  );
};
