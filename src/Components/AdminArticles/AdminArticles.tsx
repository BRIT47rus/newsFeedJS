import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IPartnerArticle } from '../../types';
import { getPartnersArticles } from '../api';
export const AdminArticles = () => {
  const [articles, setArticles] = useState<IPartnerArticle[]>([]);
  useEffect(() => {
    (async () => {
      const articles = await getPartnersArticles();
      setArticles(articles);
    })();
  }, []);
  return (
    <>
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        <Grid size={9}>
          <Typography variant="h4" gutterBottom>
            Партнерские статьи
          </Typography>
        </Grid>
        <Grid size={3}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="success" component={Link} to="/admin/create">
              Добавить новую
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {articles.map((i) => (
          <Grid size={3} key={i.id}>
            <Card>
              <CardActionArea component={Link} to={`/admin/edit/:${i.id}`}>
                <CardMedia component="img" height="140" image={i.image} alt={i.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {i.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {i.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
