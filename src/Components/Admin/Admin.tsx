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
const drawerWidth = 300;

export const Admin = () => {
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

        <Typography variant="h4" gutterBottom>
          Редактирование статьи
        </Typography>
        <Grid container spacing={2}>
          <Grid size={7}>
            <TextField label="Компания" variant="outlined" fullWidth />
          </Grid>
          <Grid size={7}>
            <TextField label="Название статьи" variant="outlined" fullWidth />
          </Grid>
          <Grid size={7}>
            <TextField label="Подводка" fullWidth multiline maxRows={4} variant="outlined" />
          </Grid>
          <Grid size={7}>
            <TextField label="Текст" fullWidth multiline maxRows={12} variant="outlined" />
          </Grid>
          <Grid size={7}>
            <TextField label="Изображение" variant="outlined" fullWidth />
          </Grid>
        </Grid>

        <Typography variant="h4" gutterBottom>
          Партнерские статьи
        </Typography>

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
