import { Box, Container, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const featureBoxStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '25%',  // 固定宽度确保四个元素在同一行
};

const featureIconStyle: SxProps<Theme> = {
    fontSize: 24,  // 缩小图标尺寸
    mb: 1,
    color: 'black'
};

const features = [
    {
        icon: ShieldOutlinedIcon,
        title: '安全透明',
        description: '智能合约保障每一笔投资'
    },
    {
        icon: PaymentOutlinedIcon,
        title: '便捷支付',
        description: '支持多种加密货币'
    },
    {
        icon: PublicOutlinedIcon,
        title: '全球互联',
        description: '连接全球创新项目'
    },
    {
        icon: TrendingUpOutlinedIcon,
        title: '数据赋能',
        description: '实时分析助力决策'
    }
];

const sectionStyle: SxProps<Theme> = {
    height: '100vh',  // 改为固定 100vh
    bgcolor: 'background.paper',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden'
};

export const FeaturesSection = () => {
    return (
        <Box 
            id="features"  // 添加 id
            sx={sectionStyle}
        >
            <Container maxWidth="lg">
                {/* 标题区域 */}
                <Box sx={{ mb: 10 }}>  {/* 增加底部间距 */}
                    <Typography 
                        variant="h4" 
                        align="center" 
                        sx={{
                            fontWeight: 600,
                            mb: 3,  // 增加与副标题的间距
                            fontSize: '2rem'
                        }}
                    >
                        孵化独角兽
                    </Typography>
                    <Typography
                        align="center"
                        color="text.secondary"
                        sx={{ maxWidth: '600px', mx: 'auto' }}
                    >
                        我们专注于发现和培养具有独角兽潜质的创新项目
                    </Typography>
                </Box>

                {/* 特色区域 */}
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: 2
                }}>
                    {features.map((feature, index) => (
                        <Box key={index} sx={featureBoxStyle}>
                            <feature.icon sx={featureIconStyle} />
                            <Typography 
                                variant="subtitle1" 
                                gutterBottom
                                sx={{ 
                                    fontWeight: 600,
                                    mb: 1,
                                    fontSize: '0.9rem'
                                }}
                            >
                                {feature.title}
                            </Typography>
                            <Typography 
                                variant="body2" 
                                color="text.secondary"
                                sx={{ 
                                    lineHeight: 1.5,
                                    fontSize: '0.8rem'
                                }}
                            >
                                {feature.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};