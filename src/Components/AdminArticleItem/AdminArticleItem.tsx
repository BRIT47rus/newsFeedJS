import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
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
import { InputErrorsType, InputNameType, InputRefsType, InputValueType } from './types';
import { getErrors, getImage } from './helpers';
import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

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
  const inputsRefs: InputRefsType = {
    'company-name': useRef<HTMLInputElement | null>(null),
    title: useRef<HTMLInputElement | null>(null),
    description: useRef<HTMLTextAreaElement | null>(null),
    text: useRef<HTMLTextAreaElement | null>(null),
    image: useRef<HTMLInputElement | null>(null),
  };
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [inputErrors, setInputErrors] = useState<InputErrorsType>({
    'company-name': '',
    description: '',
    text: '',
    title: '',
    image: '',
  });
  const [inputValues, setInputValues] = useState<InputValueType>({
    'company-name': '',
    description: '',
    text: '',
    title: '',
    image: '',
  });
  const onChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = event.currentTarget;
    const name = input.name;
    const value = input.value;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData();
    Object.entries(inputValues).forEach(([name, value]) => {
      if (name === 'image') {
        data.append(name, inputFile || new File([], ''));
      } else {
        data.append(name, value);
      }
    });
    const errors = await getErrors(Array.from(data.entries()) as [InputNameType, FormDataEntryValue][]);
    const errorsEntries = Object.entries(errors);
    setInputErrors(errors);
    const errorInput = errorsEntries.find(([, value]) => value.length > 0);
    if (errorInput) {
      const name = errorInput[0] as InputNameType;
      const inputRef = inputsRefs[name];
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: data,
    });
  };

  const showFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files === null || !files.length) {
      return;
    }
    const file = files[0];
    if (file.size === 0 || !file.type.startsWith('/image')) {
      return;
    }
    setInputFile(file);
    getImage(file).then((image) => {
      setInputValues({
        ...inputValues,
        image: image.src,
      });
    });
  };

  //--------------------3.6 3/26
  return (
    <Box component="form" noValidate onSubmit={onSubmit}>
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
              <TextField
                label="Компания"
                variant="outlined"
                fullWidth
                value={inputValues['company-name']}
                onChange={onChangeInput}
                ref={inputsRefs['company-name']}
                error={Boolean(inputErrors['company-name'].length)}
                helperText={inputErrors['company-name']}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                label="Название статьи"
                variant="outlined"
                fullWidth
                value={inputValues.title}
                onChange={onChangeInput}
                ref={inputsRefs.title}
                error={Boolean(inputErrors.title.length)}
                helperText={inputErrors.title}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                label="Подводка"
                fullWidth
                multiline
                maxRows={4}
                variant="outlined"
                value={inputValues.description}
                onChange={onChangeInput}
                ref={inputsRefs.description}
                error={Boolean(inputErrors.description.length)}
                helperText={inputErrors.description}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                label="Текст"
                fullWidth
                multiline
                maxRows={12}
                variant="outlined"
                value={inputValues.text}
                onChange={onChangeInput}
                ref={inputsRefs.text}
                error={Boolean(inputErrors.text.length)}
                helperText={inputErrors.text}
              />
            </Grid>
            <Grid size={5}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={inputValues.image} />
                  <CardContent>
                    <TextField
                      type="file"
                      label="Изображение"
                      fullWidth
                      multiline
                      maxRows={12}
                      variant="outlined"
                      onChange={showFile}
                      ref={inputsRefs.image}
                      error={Boolean(inputErrors.image.length)}
                      helperText={inputErrors.image}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
