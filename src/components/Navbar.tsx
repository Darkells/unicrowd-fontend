import { ConnectButton } from '@rainbow-me/rainbowkit';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleScroll = (elementId: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <AppBar 
            position="fixed" 
            color="transparent" 
            elevation={0}
            sx={{
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(8px)'
            }}
        >
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: { xs: 4, sm: 8, md: 12 },
                maxWidth: '1400px',
                mx: 'auto',
                width: '100%'
            }}>
                {/* Left: Logo */}
                <Box
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <Box
                        sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: '#000'
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: '1.125rem',
                            fontWeight: 500,
                            color: '#000'
                        }}
                    >
                        UniCrowd
                    </Typography>
                </Box>

                {/* Center: Navigation */}
                <Box sx={{
                    display: 'flex',
                    gap: 4,
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>
                    <Button 
                        onClick={handleScroll('features')}
                        sx={{ color: '#000' }}
                    >
                        特色
                    </Button>
                    {/* <Button 
                        component={Link} 
                        to="/projects"
                        sx={{ color: '#000' }}
                    >
                        项目
                    </Button> */}
                    <Button 
                        onClick={handleScroll('usage')}
                        sx={{ color: '#000' }}
                    >
                        使用
                    </Button>
                    <Button 
                        onClick={handleScroll('about')}
                        sx={{ color: '#000' }}
                    >
                        关于
                    </Button>
                </Box>

                {/* Right: Actions */}
                <Box sx={{
                    display: 'flex',
                    gap: 2
                }}>
                    <ConnectButton.Custom>
                        {({
                            account,
                            chain,
                            openAccountModal,
                            openChainModal,
                            openConnectModal,
                            mounted,
                        }) => {
                            const ready = mounted
                            const connected = ready && account && chain

                            return (
                                <Box>
                                    {(() => {
                                        if (!connected) {
                                            return (
                                                <Button 
                                                    onClick={openConnectModal}
                                                    variant="contained" 
                                                    sx={{ 
                                                        bgcolor: '#000',
                                                        '&:hover': {
                                                            bgcolor: 'rgba(0, 0, 0, 0.8)'
                                                        }
                                                    }}
                                                >
                                                    连接钱包
                                                </Button>
                                            )
                                        }

                                        return (
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Button
                                                    onClick={openChainModal}
                                                    variant="outlined"
                                                    sx={{ 
                                                        borderColor: '#000',
                                                        color: '#000'
                                                    }}
                                                >
                                                    {chain.name}
                                                </Button>
                                                <Button
                                                    onClick={openAccountModal}
                                                    variant="contained"
                                                    sx={{ 
                                                        bgcolor: '#000',
                                                        '&:hover': {
                                                            bgcolor: 'rgba(0, 0, 0, 0.8)'
                                                        }
                                                    }}
                                                >
                                                    {account.displayName}
                                                </Button>
                                            </Box>
                                        )
                                    })()}
                                </Box>
                            )
                        }}
                    </ConnectButton.Custom>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;