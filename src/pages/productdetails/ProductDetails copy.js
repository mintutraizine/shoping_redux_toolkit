import { Box, CardMedia, Checkbox, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
const colorarr=[{colorname:'red',colorcode:'red'},{colorname:'black',colorcode:'black'},{colorname:'green',colorcode:'green'}]
const ProductDetails = () => {
  const { state } = useLocation();
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = React.useState('');
  const handleColorChange = (val) => {
    setSelectedValue(val);
  };
  console.log("params" + JSON.stringify(state.data))
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
          <Typography style={{fontSize:25}}>
            {state.data.title}
          </Typography>
          <Typography >
            {state.data.category}
          </Typography>
          <Stack flexDirection={'row'} >
          <Typography sx={{color:'#D9AC5D'}}>
            {'$'+state.data.price}
          </Typography>
          <Typography style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',marginLeft:20,}}>
            {'$'+state.data.price}
          </Typography>
          </Stack>
          
          <Stack direction={'row'} spacing={1}>
          {colorarr.map((item,index)=>
          <Box sx={{ display:'flex',borderRadius: '50%',  height: 33, width: 33,border:selectedValue==item.colorname?2:null,borderBlockColor:selectedValue==item.colorname?'#D9AC5D':null,alignItems: 'center',
          justifyContent: 'center',
         }}>
         <Box sx={{ borderRadius: '50%', width: 30,backgroundColor:item.colorcode,
         height: 30,}} onClick={()=>handleColorChange(item.colorname)}>
         </Box>
         </Box>
        
         
          )}

     
      </Stack>
      {colorarr.map((item,index)=>
  <Checkbox
  label="CircleTwoToneIcon"
  checkedIcon={  <Box sx={{ display:'flex',borderRadius: '50%',  height: 33, width: 33,border:2,borderColor:'#D9AC5D',alignItems: 'center',
  justifyContent: 'center',
 }}>
 <Box sx={{ borderRadius: '50%', width: 30,backgroundColor:item.colorcode,
 height: 30,}} onClick={()=>handleColorChange(item.colorname)}>
 </Box>
 </Box>}
  icon={ <Box sx={{ borderRadius: '50%', width: 30,backgroundColor:item.colorcode,
  height: 30,}} onClick={()=>handleColorChange(item.colorname)}>
  </Box>}
/> 
        
         
          )}

{/* {colorarr.map((item,index)=>
   <Checkbox
  label="CircleTwoToneIcon"
  icon={<CircleIcon sx={{color:item.colorcode}} />}
  checkedIcon={<CircleTwoToneIcon sx={{color:item.colorcode}}/>}
/> 

)} */}
        </Box>

      </Stack>
    </div>
  );
};

export default ProductDetails;
