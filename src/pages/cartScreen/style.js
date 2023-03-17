const cartstyle = {
    cart: {
        borderRadius: 10,
        // backgroundColor:'red'
    },
    itemcarttextstyle: {
        fontSize: { xs: 20, sm: 25, md: 30, lg: 30 }, color: '#374256'
    },
    productbox: {
        bgcolor: '#F5F5F5', p: 2, display: 'flex', flexDirection: 'row',
        m: 1,
    },
    imagebox: {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    productdetailsbox: {

        paddingLeft:2, flexDirection: 'row', width: '100%',
        justifyContent: 'space-between', alignItems: 'center',

    },
    titlestyle:{
        fontWeight:600,fontSize: {xs: 12, sm: 15, md: 20, lg: 22 }
    },
    colortextstyle:{
        marginTop: 0.2,fontWeight:500,fontSize: { xs: 11, sm: 13, md: 15, lg: 18 }
    },
    itemdropdown:{
        marginTop:1, 
       borderRadius:1, width: 62,
       height: { xs: 30, sm: 30, md: 30, lg: 36 },
       // border: 1,borderRadius:1,borderColor:'#DDDDDD',
        background:'#FFFFFF'
    },
    removebutton:{
            width: 95,
            height: 34,border:1,borderColor:'#D9AC5D',marginTop:1,marginBottom:1,color:'#374256',
            textTransform:'none'
    }
}
export default cartstyle;