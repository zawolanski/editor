import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, SELECTION_CHANGE_COMMAND } from 'lexical';
import { useCallback, useEffect, useState } from 'react';

export const Toolbar = () => {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    console.log('selection?', selection);
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
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
    <button
      type="button"
      onClick={() => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
      }}
      className={`toolbar-item spaced ${isBold ? 'active' : ''}`}
      aria-label="Format Bold"
    >
      B
    </button>
  );
};
