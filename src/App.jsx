import Boot from "./pages/Boot";
import Story from "./pages/Story";
import Proposal from "./pages/Proposal";
import Celebration from "./pages/Celebration";
import { JourneyProvider, useJourney } from "./context/JourneyContext";
import PlannerPage from "./pages/PlannerPage";
import SummaryPage from "./pages/SummaryPage";
import PageTransition from "./components/PageTransition";
import FinalBuild from "./pages/final/FinalBuild";
import Letter from "./pages/final/Letter";
import InvitationCard from "./pages/final/InvitationCard";
import ThankYou from "./pages/final/ThankYou";

function AppContent() {
  const { journey } = useJourney();

  // Helper to wrap components consistently
  const renderPage = (Component) => (
    <PageTransition pageKey={journey.screen}>
      <Component />
    </PageTransition>
  );

  switch (journey.screen) {
    case "boot":
      return renderPage(Boot);
    case "story":
      return renderPage(Story);
    case "letter":
      return renderPage(Letter);
    case "proposal":
      return renderPage(Proposal);
    case "celebration":
      return renderPage(Celebration);
    case "date":
    case "time":
    case "food":
    case "activity":
      return renderPage(PlannerPage);
    // case "summary":
    //   return renderPage(SummaryPage);
    case "summary":
      return <SummaryPage />;

    case "final-build":
      return renderPage(FinalBuild);
    case "invitation":
      return renderPage(InvitationCard);
    case "thankyou":
      return renderPage(ThankYou);
    default:
      return null;
  }
}

export default function App() {
  return (
    <JourneyProvider>
      <AppContent />
    </JourneyProvider>
  );
}