import ContactInformation from "./ContactInformation";
import HistoryAndMileStone from "./HistoryAndMileStone";
import MissionStatement from "./MissionStatement";
import TeamSection from "./TeamSection";

const AboutUsPage = () => {
    return (
        <div>
            
            <TeamSection></TeamSection>
            <MissionStatement></MissionStatement>
            <ContactInformation></ContactInformation>
            <HistoryAndMileStone></HistoryAndMileStone>

        </div>
    );
};

export default AboutUsPage;