import { Box, Button, CardMedia, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { CheckBox } from '@mui/icons-material';
import { add } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
const colorarr = [{ colorname: 'blue', colorcode: 'blue' }, { colorname: 'red', colorcode: 'red' }, { colorname: 'black', colorcode: 'black' }, { colorname: 'green', colorcode: 'green' }]
const ProductDetails = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [ItemQuantity, setItemQuantity] = React.useState(1);
  const [selectedValue, setSelectedValue] = React.useState('blue');
  const [selectedValue1, setSelectedValue1] = React.useState('a');

  //call to change item color 7-03-2023
  const handleColorChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleItemchange = (event) => {
    setItemQuantity(event.target.value);
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleColorChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  console.log("params" + JSON.stringify(state.data))

  const handleAdd = (product) => {
    dispatch(add(product));
};

  return (
    <div style={{
      margin
        : 20
    }}>
     
      <Stack spacing={2} direction={'row'}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"

          sx={{
            width: 500,
            height: 500,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}

        >
          <CardMedia
            component="img"
            sx={{
              height: 270,
              width: 305,
              maxHeight: { xs: 270, md: 270 },
              maxWidth: { xs: 305, md: 305 },
            }}
            src={state.data.image}
          />
        </Box>
        <Box
          sx={{
            width: '80%',
            height: 500,
            backgroundColor: 'primary',
            '&:hover': {
              backgroundColor: 'primary',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Typography style={{ fontSize: 25 }}>
            {state.data.title}
          </Typography>
          <Typography >
            {state.data.category}
          </Typography>
          <Stack flexDirection={'row'} >
            <Typography sx={{ color: '#D9AC5D' }}>
              {'$' + state.data.price}
            </Typography>
            <Typography style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', marginLeft: 20, }}>
              {'$' + state.data.price}
            </Typography>
          </Stack>

          <Stack direction={'row'} spacing={1}>
            {colorarr.map((item, index) =>
              <Radio
                {...controlProps(item.colorname)}
                label="CircleTwoToneIcon"
                checkedIcon={<Box sx={{
                  display: 'flex', borderRadius: '50%', height: 33, width: 33, border: 2, borderColor: '#D9AC5D', alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Box sx={{
                    borderRadius: '50%', width: 30, backgroundColor: item.colorcode,
                    height: 30,
                  }}>
                  </Box>
                </Box>}
                icon={<Box sx={{
                  borderRadius: '50%', width: 30, backgroundColor: item.colorcode,
                  height: 30,
                }} >
                </Box>}
              />


            )}


          </Stack>
          <Typography style={{ textDecorationStyle: 'solid', marginLeft: 20, }}>
            {'Color: ' + selectedValue}
          </Typography>

          <FormControl size="small" sx={{ m: 1, minWidth: 80}}>
  <Select
  inputProps={{ 'aria-label': 'Without label' }}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={ItemQuantity}
    onChange={handleItemchange}
  >
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
  </Select>
</FormControl>
<Button onClick={() => handleAdd(state.data)} sx={{width:200,color:'#FFF',backgroundColor:'#D9AC5D',textTransform: 'none'}} variant="contained">Add to cart</Button>
       
<Typography style={{ textDecorationStyle: 'solid', marginLeft: 20, }}>
            {'Delivery by: ' + 'Wednesday 3 apirlll 20323'}
          </Typography>
        </Box>

      </Stack>
    </div>
  );
};

export default ProductDetails;
