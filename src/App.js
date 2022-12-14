import './App.css';
import * as React from 'react';
import { ReactDOM } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Box, Paper, Typography, Card, CardMedia, CardContent, CardActionArea, Grid, Modal, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'

const data = {
  products: [
    {
      id: '1',
      name: 'TI11 Official Player Jacket [Maroon]',
      price: '₱5,500',
      image: 'https://cdn.shopify.com/s/files/1/0563/9713/6068/products/TI11ProJacket-Front-9-26-22_grande.png?v=1664921404',
      desc: 'Feel like part of The International and show your support with the official player jacket from TI.'
    },
    {
      id: '2',
      name: 'TI11 Official Pullover Hoodie [Black]',
      price: '₱3,800',
      image: 'https://cdn.shopify.com/s/files/1/0563/9713/6068/products/TI11EventHoodie-Front_2048x2048.png?v=1664829836',
      desc: 'This hoodie is made of a polyester-cotton blend which is made by air-jetting yarn.'
    },
    {
      id: '3',
      name: 'TI11 Hellforged Pro Jersey 2022 [Maroon]',
      price: '₱3,500',
      image: 'https://cdn.shopify.com/s/files/1/0563/9713/6068/products/TI11HellforgedJersey-Front_2048x2048.png?v=1664913860',
      desc: 'Feel like part of The International and show your support with the official player jacket from TI.'
    },
    {
      id: '4',
      name: 'TI11 Hellforged Pro Jersey 2022 [Black]',
      price: '₱3,500',
      image: 'https://cdn.shopify.com/s/files/1/0563/9713/6068/products/TI11MoltenJersey-Front_2048x2048.png?v=1664913891',
      desc: 'Feel like part of The International and show your support with the official player jacket from TI.'
    },
    {
      id: '5',
      name: 'TI11 Event Logo Stainless Steel Tumbler',
      price: '₱2,400',
      image: 'https://cdn.shopify.com/s/files/1/0563/9713/6068/products/stainless-steel-tumbler-black-front-633b444b57893_2048x2048.png?v=1664828504',
      desc: 'Enjoy hot or cold drinks on the go with this stylish stainless steel tumbler!'
    },
    {
      id: '6',
      name: 'TI11 Molten mouse pad',
      price: '₱2,400',
      image: 'https://cdn.shopify.com/s/files/1/0563/9713/6068/products/gaming-mouse-pad-white-36x18-front-633b43cc9ec6f_2048x2048.png?v=1664828374',
      desc: 'Feel like part of The International and show your support with the official player jacket from TI.'
    },
    {
      id: '7',
      name: 'TI11 Event Logo Tote Bag',
      price: '₱2,000',
      image: 'https://cdn.shopify.com/s/files/1/0563/9713/6068/products/eco-tote-bag-black-front-633b42c490268_2048x2048.png?v=1664828112',
      desc: 'Say goodbye to plastic, and bag your goodies in this organic cotton tote bag. ThereU+2019s more than enough room for groceries, books, and anything in between.'
    },
    {
      id: '8',
      name: 'TI11 Long Sleeve Tee [Black]',
      price: '₱2,400',
      image: 'https://cdn.shopify.com/s/files/1/0563/9713/6068/products/TI11EventLS-Front_2048x2048.png?v=1664829780',
      desc: 'This tee features taped neck and shoulder seams for comfort and durability and a twin-needle finish on the bottom hem will ensure its longevity wash after wash.'
    },
    {
      id: '9',
      name: 'TI11 Headphone Case',
      price: '₱1,500',
      image: 'https://cdn.shopify.com/s/files/1/0563/9713/6068/products/airpods-case-black-airpods-pro-front-633b47dbe01f2_2048x2048.png?v=1664829413',
      desc: 'Get a two-in-one deal with these AirPods Pro case: an impact-absorbing protector for your earbuds and a stylish accessory you can attach to your clothes and bags with a metal carabiner.'
    }
  ]
}

function Navbar() {
  return (
    <div className=''>
      <Grid2 
      container 
      spacing={0}
      alignItems="center">
        <Grid2 xs={4}>
          <img onClick={Navbar} src='https://cdn.shopify.com/s/files/1/0563/9713/6068/t/7/assets/ti-logo.png?v=154334006069858522741663169707' alt='TI logo' width={250}></img>
        </Grid2>
        <Grid2 xs={4} sx={{ zIndex: 10 }}>
          <img className='aegis' src='https://cdn.shopify.com/s/files/1/0563/9713/6068/files/logo_410x.png?v=1662754630' alt='TI logo'></img>
        </Grid2>
        <Grid2 xs={4}>
          <Typography
          variant='h5'
          sx={{fontWeight: '900'}}
          className='text-top'>
            GET YOUR<br></br>OFFICIAL GEAR HERE!
        </Typography>
        </Grid2>
      </Grid2>
    </div>
  )
}

function Home(props, direction) {
  const {products} = props;
  return (
    <Grid container spacing={3}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </Grid>
  );
}

function Product(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {product} = props;
  const [quantity, setQuantity] = React.useState('');

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflowY: 'auto',
        width: 1000,
        bgcolor: 'background.paper',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
        borderRadius: 5
        }}>
          <Grid 
          container
          justifyContent="center"
          alignItems="center">
            <Grid xs={6}>
              <img src={product.image} alt={product.name} width='350px'></img>
            </Grid>
            <Grid xs={6}>
              <Typography gutterBottom variant="h4" component="div">
              {product.name}
              </Typography>
              <Typography variant="h5" color="text.primary">
              {product.price}
              </Typography>
              <Typography variant="body2" color="text.primary">
              {product.desc}
              </Typography>
              <FormControl fullWidth sx={{my:2}}>
                <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={quantity}
                  label="Quantity"
                  onChange={handleChange}
                >
                  <MenuItem disabled value="">
                  <em>Quantity</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained">Add to Cart</Button>
            </Grid>
          </Grid>
          {/*table */}
        </Box>
      </Modal>

    <Grid xs={4}>
      <Card elevation={0}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="300px"
            image= {product.image}
            alt= {product.name}
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {product.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
            {product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary" marginX={15}>
            {product.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </>
  )
}

class App extends React.Component {
  render() {
    const {products} = data;
    return<>
      <div className="Home">
        <Navbar />
        <Box sx={{
          mt: -9
        }}
          display='flex'
          alignItems='center'>
            <Paper sx={{
              width: '100vw',
              p: 5}}>
              <Home products = {products} />
            </Paper>
        </Box>
      </div>
    </>
  }
}

export default App

const el = document.querySelector("#root");
ReactDOM.render(<App />, el);