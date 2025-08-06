import React from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const AdminArticlesItem = () => {
  const { id }: { id?: string } = useParams();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        <Grid size={9}>
          <Typography variant="h4" gutterBottom>
            {id ? ' Редактирование статьи' : 'Новая статья'}
          </Typography>
        </Grid>
        <Grid size={3}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="success" sx={{ marginRight: 1 }}>
              Сохранить
            </Button>

            {id && (
              <div>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Удалить статью</MenuItem>
                </Menu>
              </div>
            )}
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={7}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField label="Компания" variant="outlined" fullWidth />
            </Grid>
            <Grid size={12}>
              <TextField label="Название статьи" variant="outlined" fullWidth />
            </Grid>
            <Grid size={12}>
              <TextField label="Подводка" fullWidth multiline maxRows={4} variant="outlined" />
            </Grid>
            <Grid size={12}>
              <TextField label="Текст" fullWidth multiline maxRows={12} variant="outlined" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
