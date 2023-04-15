import TopNavigation from "../components/topnavigation";
import TopBanner from "../components/topbanner";
import Services from "../components/services";
import Analysis from "../components/analysis";
import Summary from "../components/summary";
import RecentProjects from "../components/recentprojects";
import Video from "../components/video";
import ClientReview from "../components/clientreview";
import Footer from "../components/footer";
import Grid from '@mui/material/Unstable_Grid2';


export default function () {
    return (
        <Grid container sx={{ justifyContent: 'center', width: '100%' }}>
            <TopNavigation title="Home" />
            <TopBanner />
            <Services />
            <Analysis />
            <Summary />
            <RecentProjects />
            {/* <Courses /> */}
            <Video />
            <ClientReview />
            <Footer />
        </Grid >
    )
}