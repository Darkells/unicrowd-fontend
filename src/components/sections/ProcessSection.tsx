import { Box, Container, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

const processSteps = [
    {
        number: '01',
        icon: AccountBalanceWalletOutlinedIcon,
        title: '连接',
        description: '链接数字货币钱包'
    },
    {
        number: '02',
        icon: SearchOutlinedIcon,
        title: '发现',
        description: '探索优质创新项目'
    },
    {
        number: '03',
        icon: RocketLaunchOutlinedIcon,
        title: '投资',
        description: '全程追踪投资动态'
    },
    {
        number: '04',
        icon: CurrencyExchangeOutlinedIcon,
        title: '收益',
        description: '智能合约分配'
    }
];

const sectionStyle: SxProps<Theme> = {
    height: '100vh',  // 改为固定 100vh
    bgcolor: '#FAFAFA',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden'
};

const stepsContainerStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    gap: { xs: 2, md: 6 },
    width: '100%',
    px: 2
};

const stepStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '220px'  // Fixed width for each step
};

const stepNumberStyle: SxProps<Theme> = {
    color: 'text.disabled',
    fontSize: '0.75rem',
    mb: 2
};

const stepIconStyle: SxProps<Theme> = {
    fontSize: 28,
    mb: 1.5,
    color: 'black'
};

const stepTitleStyle: SxProps<Theme> = {
    fontWeight: 600,
    mb: 0.5,
    fontSize: '0.9rem'
};

const stepDescriptionStyle: SxProps<Theme> = {
    fontSize: '0.8rem',
    color: 'text.secondary',
    lineHeight: 1.4
};

export const ProcessSection = () => {
    return (
        <Box 
            id="usage"  // 添加 id
            sx={sectionStyle}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: 8 }}>
                    <Typography 
                        variant="h4" 
                        align="center" 
                        sx={{
                            fontWeight: 600,
                            mb: 2,
                            fontSize: '2rem'
                        }}
                    >
                        四步开始
                    </Typography>
                    <Typography
                        align="center"
                        color="text.secondary"
                        sx={{ maxWidth: '600px', mx: 'auto' }}
                    >
                        从连接钱包到获取收益，一切尽在掌握
                    </Typography>
                </Box>

                <Box sx={stepsContainerStyle}>
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <Box key={index} sx={stepStyle}>
                                <Typography sx={stepNumberStyle}>
                                    {step.number}
                                </Typography>
                                <Icon sx={stepIconStyle} />
                                <Typography sx={stepTitleStyle}>
                                    {step.title}
                                </Typography>
                                <Typography sx={stepDescriptionStyle}>
                                    {step.description}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};