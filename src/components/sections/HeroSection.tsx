import { Box, Container, Typography, Button } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

const heroStyle: SxProps<Theme> = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    bgcolor: '#fff',
    position: 'relative'
};

const contentStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: -45  // 向上移动更多
};

const statsContainerStyle: SxProps<Theme> = {
    position: 'absolute',
    bottom: '30%',  // 上移统计数据
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '80px'
};

const statItemStyle: SxProps<Theme> = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1
};

export const HeroSection = () => {
    return (
        <Box sx={heroStyle}>
            <Container maxWidth="lg">
                <Box sx={contentStyle}>
                    <Typography 
                        variant="h1" 
                        sx={{
                            fontWeight: 700,
                            fontSize: '4rem',  // 增大字体
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                            mb: 4,
                            textAlign: 'center'
                        }}
                    >
                        发现下一个<br/>独角兽项目
                    </Typography>
                    <Typography 
                        color="text.secondary" 
                        sx={{
                            fontSize: '1.125rem',  // 略微增大副标题
                            mb: 1,
                            fontWeight: 400
                        }}
                    >
                        专注于高潜力创新项目的Web3众筹平台
                    </Typography>
                    <Typography 
                        color="text.secondary"
                        sx={{
                            fontSize: '1.125rem',
                            mb: 8,  // 增加与按钮的间距
                            fontWeight: 400
                        }}
                    >
                        让每个改变世界的想法都能起飞
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <Button 
                            variant="contained"
                            sx={{ 
                                fontSize: '0.875rem',
                                px: 4,
                                py: 1,
                                borderRadius: 1,
                                backgroundColor: 'black',
                                '&:hover': {
                                    backgroundColor: 'black',
                                    opacity: 0.9
                                }
                            }}
                        >
                            开始探索
                        </Button>
                        <Button 
                            variant="outlined"
                            sx={{ 
                                fontSize: '0.875rem',
                                px: 4,
                                py: 1,
                                borderRadius: 1,
                                borderColor: 'black',
                                color: 'black',
                                '&:hover': {
                                    borderColor: 'black',
                                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                }
                            }}
                        >
                            发起项目
                        </Button>
                    </Box>
                </Box>

                <Box sx={statsContainerStyle}>
                    {[
                        { value: '$12.5M', label: '累计募资' },
                        { value: '156', label: '独角兽项目' },
                        { value: '8.2K', label: '活跃投资者' },
                        { value: '45', label: '全球伙伴' }
                    ].map((stat, index) => (
                        <Box key={index} sx={statItemStyle}>
                            <Typography 
                                sx={{
                                    fontSize: '2rem',  // 增大统计数字
                                    fontWeight: 600,
                                    color: 'black'
                                }}
                            >
                                {stat.value}
                            </Typography>
                            <Typography 
                                sx={{
                                    fontSize: '1rem',  // 增大标签文字
                                    color: 'text.secondary'
                                }}
                            >
                                {stat.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};