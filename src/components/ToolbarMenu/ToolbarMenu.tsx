import { Avatar, Box, Divider, Menu, Theme, Typography } from '@mui/material';

import { getAuth } from 'firebase/auth';
import { forwardRef } from 'react';

import { SignOut } from '@components';
import { getInitials } from '@utils';

interface Props {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}
export const ToolbarMenu = forwardRef(({ handleClose, ...props }: Props) => {
  const user = getAuth().currentUser;
  if (!user) return null;

  return (
    <Menu
      {...props}
      onClose={handleClose}
      MenuListProps={{ style: { padding: 0 } }}
      PaperProps={{ sx: { border: ({ palette }: Theme) => `1px solid ${palette.divider}` } }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      keepMounted
    >
      <Box width="17.5rem">
        <Box p={1.5} display="flex" alignItems="center" flexDirection="column">
          <Avatar sx={{ mb: '0.5rem', width: '4rem', height: '4rem', fontSize: '1.75rem' }}>
            {user.displayName ? getInitials(user.displayName) : ''}
          </Avatar>
          <Typography textAlign="center" variant="subtitle1" lineHeight="1.25rem">
            {user.displayName}
          </Typography>
          <Typography textAlign="center" variant="subtitle2" lineHeight="1.25rem">
            {user.email}
          </Typography>
        </Box>
        <Divider />
        <Box p={1.5} display="flex" justifyContent="center">
          <SignOut />
        </Box>
      </Box>
    </Menu>
  );
});
