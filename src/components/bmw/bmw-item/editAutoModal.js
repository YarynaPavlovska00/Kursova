import React, {useState, forwardRef} from 'react';

import styles from './styles.module.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {CssBaseline} from '@material-ui/core'

const Mercedes = forwardRef(function Mercedes(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://material-ui.com/'>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))

const EditAutoModal = ({open, onClose, data, editItem}) => {

    const classes = useStyles()

    const [id, setId] = useState('');
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [model, setModel] = useState('');
    const [power, setPower] = useState('');

    let editAuto1 = {
        'id': id,
        'type': category,
        'marka': name,
        'price': price,
        'weigth': weight,
        'size': size,
        'url': image.toString(),
        'info': desc,

        "articul": "001232",
        "deviation": "± 0.5%",
        "napruga": "200",
        "model": model,
        "useful": "Opir",
        "opir": size,
        "power": power,
        "in_market": "120",

    }

    let editAuto2 = {
        "id": "0",
        "type": "bmw",
        "marka": "china-internation",
        "in_market": "120",
        "weigth": "0.2",
        "size": "0.02x0.02",
        "info": "vsio garno, vsio abs",
        "model": "МЛТ-0.125",
        "useful": "Opir",
        "opir": "12000",
        "power": "0.125",
        "napruga": "200",
        "deviation": "± 0.5%",
        "url": "https://blackchip.com.ua/image/catalog/tovar/rezustoru/MLT.jpg",
        "price": "1",
        "articul": "001232"
    }

    const setEditAuto = (editAuto) => localStorage.setItem('editAuto', JSON.stringify(editAuto))

    const editedAuto = localStorage.getItem('editAuto');
    console.log(editedAuto, 'EDITED AUTO')

    const [open_3, setOpen_3] = useState(true);
    const handleClickOpen_3 = () => {
        setOpen_3(true)
    }
    const handleClose_3 = () => {
        setOpen_3(false)
    }


    return(
        <>
            <Dialog
                open={open}
                MercedesComponent={Mercedes}
                keepMounted
                onClose={onClose}
                className={styles.lab5_dialog1}
            >
                <Container component='main' maxWidth='xs'>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component='h1' variant='h5'>
                            Редагуйте товар
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete='fname'
                                        name='firstName'
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='id'
                                        label='Код'
                                        type={'еуче'}
                                        value={data.id}
                                        placeholder={data.id}
                                        onChange={event => setId(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='categoryID'
                                        label='Категорія'
                                        name='Category ID'
                                        type={'text'}
                                        onChange={event => setCategory(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id={'name'}
                                        label='Назва'
                                        name={'Name'}
                                        onChange={event => setName(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='price'
                                        label='Ціна'
                                        name='Price'
                                        type={'text'}
                                        onChange={event => setPrice(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='weight'
                                        name='Weight'
                                        label={'Вага'}
                                        type={'text'}
                                        onChange={event => setWeight(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='size'
                                        name='Size'
                                        label={'Розмір'}
                                        type={'text'}
                                        onChange={event => setSize(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='image'
                                        name='Image'
                                        label={'Фото'}
                                        type={'text'}
                                        onChange={event => setImage(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        variant='outlined'
                                        required
                                        fullWidth
                                        id='description'
                                        name='Description'
                                        label={'Опис'}
                                        onChange={event => setDesc(event.target.value)}
                                    />
                                </Grid>

                            </Grid>

                            <Button
                                // type="submit"
                                fullWidth
                                variant='contained'
                                color='primary'
                                className={classes.submit}

                                onClick={async () => {
                                    await setEditAuto(editAuto1)
                                    await onClose()
                                    await editItem(+data.id)
                                }
                                }
                            >
                                Редагувати!
                            </Button>

                        </form>
                    </div>
                </Container>
            </Dialog>
        </>
    )
}

export default EditAutoModal;
