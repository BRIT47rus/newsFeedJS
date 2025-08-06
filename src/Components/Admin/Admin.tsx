import React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const drawerWidth = 300;

export const Admin = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Админ панель
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="Партнерские статьи" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Grid container spacing={2} sx={{ marginBottom: 3 }}>
          <Grid size={9}>
            <Typography variant="h4" gutterBottom>
              Редактирование статьи
            </Typography>
          </Grid>
          <Grid size={3}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" color="success" sx={{ marginRight: 1 }}>
                Сохранить
              </Button>
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

          <Grid size={5}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" height="140" image="https://placeimg.dev/600x600" alt="green iguana" />
                <CardContent>
                  <input type="file" />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginBottom: 3 }}>
          <Grid size={9}>
            <Typography variant="h4" gutterBottom>
              Партнерские статьи
            </Typography>
          </Grid>
          <Grid size={3}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" color="success">
                Добавить новую
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {[1, 2, 3, 4].map((i) => (
            <Grid size={3} key={i}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="https://placeimg.dev/600x600" alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                      continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
