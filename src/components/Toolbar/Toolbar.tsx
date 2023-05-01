import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import { AppBar, Box, Divider, Toolbar as MUIToolbar, Paper } from '@mui/material';
import { $getSelection, $isRangeSelection, SELECTION_CHANGE_COMMAND, TextFormatType } from 'lexical';
import { useCallback, useEffect, useState } from 'react';

import { SubSuperScriptTools } from './SubSuperScript';
import { TextFormattingTools } from './TextFormatting';

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
      if (selection.hasFormat('subscript')) selected.push('subscript');
      if (selection.hasFormat('superscript')) selected.push('superscript');
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
      <AppBar position="fixed" color="default" sx={{ marginBottom: '1.5rem' }}>
        <MUIToolbar>
          <Box display="flex" justifyContent="center" flexGrow={1}>
            <Paper elevation={0} sx={{ display: 'flex' }}>
              <TextFormattingTools selectedFormats={selectedFormats} />
              <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
              <SubSuperScriptTools selectedFormats={selectedFormats} />
            </Paper>
          </Box>
        </MUIToolbar>
      </AppBar>
    </Box>
  );
};
