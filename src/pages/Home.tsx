import { Box } from '@mui/material';
import { HeroSection } from '../components/sections/HeroSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { AboutSection } from '../components/sections/AboutSection';

const Home = () => {
    return (
        <Box component="main" sx={{ pt: '64px' }}>
            <HeroSection />
            <FeaturesSection />
            <ProcessSection />
            <AboutSection />
        </Box>
    );
};

export default Home;