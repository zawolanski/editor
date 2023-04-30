import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { Container } from '@mui/material';

import { Toolbar } from '@components';
import { THEME } from '@config';
import { onError } from '@utils';

import styles from '../../styles/editor.module.scss';

export const Editor = () => {
  const initialConfig = {
    namespace: 'MyEditor',
    onError,
    theme: THEME,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Toolbar />
      <Container>
        <RichTextPlugin
          contentEditable={<ContentEditable className={styles.editor} />}
          placeholder={<div>Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
      </Container>
    </LexicalComposer>
  );
};
