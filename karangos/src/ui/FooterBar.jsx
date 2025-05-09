import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

export default function FooterBar() {
    return (
        <Box 
        component="footer" 
        sx={{ 
          backgroundColor: 'action.disabledBackground',
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',  // posição fixa
          bottom: 0,          // na parte de baixo da página
          width: '100vw'      // 100% da largura da viewport
        }} // sx é usado no lugar no style, é mais aprimorado quando se usa 
        >
            <Typography variant="caption" gutterBottom>
            Desenvolvido e mantido com <LocalCafeIcon fontSize="small" /> e muita fé, por
                <a href="mailto:emaildigisele@gmail.com"> Gisele Roncoleta</a>
                </Typography>
    </Box>
  );
}
