import { Box, Container, Typography, Button } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

const sectionStyle: SxProps<Theme> = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: '#fff',  // 改回白色背景
    color: '#000'     // 文字改为黑色
};

const contentStyle: SxProps<Theme> = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    py: 8 // 保持内容区域黑色背景
};

const footerStyle: SxProps<Theme> = {
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',  // 更改边框颜色
    py: 6
};

// 调整左侧 logo 区域宽度和布局
const logoStyle: SxProps<Theme> = {
    width: '40%'
};

// 调整右侧导航区域布局
const navigationStyle: SxProps<Theme> = {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
};

export const AboutSection = () => {
    return (
        <Box 
            id="about"  // 添加 id
            sx={sectionStyle}
        >
            {/* Main Content */}
            <Box sx={contentStyle}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: '3.5rem',
                            fontWeight: 700,
                            mb: 3,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        成为独角兽投资者
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '1.125rem',
                            mb: 6,
                            maxWidth: '600px',
                            mx: 'auto'
                        }}
                    >
                        加入精选投资者社区，抢先投资下一个独角兽
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}> {/* 添加 justifyContent: 'center' */}
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#fff',
                                color: '#000',
                                px: 4,
                                py: 1.5,
                                fontSize: '0.875rem',
                                '&:hover': {
                                    bgcolor: 'rgba(255, 255, 255, 0.9)'
                                }
                            }}
                        >
                            了解更多
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Footer */}
            <Container maxWidth="lg">
                <Box sx={footerStyle}>
                    <Box sx={{ 
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 6
                    }}>
                        {/* Left: Logo & Description */}
                        <Box sx={logoStyle}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                <Box
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        bgcolor: '#000'
                                    }}
                                />
                                <Typography sx={{ fontSize: '1.25rem', fontWeight: 500, color: '#000' }}>
                                    UniCrowd
                                </Typography>
                            </Box>
                            <Typography 
                                color="text.secondary"
                                sx={{ fontSize: '0.875rem' }}
                            >
                                专注于培养独角兽项目的Web3众筹平台
                            </Typography>
                        </Box>

                        {/* Right: Navigation */}
                        <Box sx={navigationStyle}>
                            {/* 产品 */}
                            <Box>
                                <Typography 
                                    variant="subtitle1" 
                                    sx={{ 
                                        fontWeight: 600, 
                                        mb: 2,
                                        fontSize: '1rem'  // 调小字体大小
                                    }}
                                >
                                    产品
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>众筹项目</Typography>
                                    <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>投资者工具</Typography>
                                    <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>项目发起</Typography>
                                </Box>
                            </Box>

                            {/* 资源 */}
                            <Box>
                                <Typography 
                                    variant="subtitle1" 
                                    sx={{ 
                                        fontWeight: 600, 
                                        mb: 2,
                                        fontSize: '1rem'  // 调小字体大小
                                    }}
                                >
                                    资源
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>帮助中心</Typography>
                                    <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>开发文档</Typography>
                                    <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>博客</Typography>
                                </Box>
                            </Box>

                            {/* 公司 */}
                            <Box>
                                <Typography 
                                    variant="subtitle1" 
                                    sx={{ 
                                        fontWeight: 600, 
                                        mb: 2,
                                        fontSize: '1rem'  // 调小字体大小
                                    }}
                                >
                                    公司
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>关于我们</Typography>
                                    <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>联系我们</Typography>
                                    <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>隐私政策</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Copyright */}
                    <Typography 
                        color="text.secondary"
                        sx={{ 
                            fontSize: '0.75rem',
                            textAlign: 'center'
                        }}
                    >
                        © 2025 UniCrowd. 保留所有权利。
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};