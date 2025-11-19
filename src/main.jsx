import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import "./index.css";

import RootLayout from "./Layout/RootLayout.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import NotFound from "./Pages/notfound.jsx";

// Components area
//buttons
import ButtonPage from "./components/buttons/ButtonPage.jsx";
import ThreedButtonPage from "./components/buttons/3dbuttonPage.jsx";
import OnTapButtonPage from "./components/buttons/OntapButtonPage.jsx";
import CapsuleButtonPage from "./components/buttons/CapsuleButtonPage.jsx";

//cards
import SimpleCardPage from "./components/cards/SimpleCardPage.jsx";
import HoverCardPage from "./components/cards/HovercardPage.jsx";
import BlockTextCardPage from "./components/cards/BlockTextCards.jsx";
import StackCardsPage from "./components/cards/StackCardsPage.jsx";
import TiltCardsPage from "./components/cards/TiltCardPage.jsx";
import JobUiCardPage from "./components/cards/JobUICardPage.jsx";

//badge
import BadgePage from "./components/badges/Badge.jsx";
import AnimatedBadgePage from "./components/badges/AnimatedBadge.jsx";
import FloatBadgePage from "./components/badges/FloatBadgePage.jsx";

//text
import TextBouncePage from "./components/texts/TextBouncePage.jsx";
import TextMotionPage from "./components/texts/TextMotionPage.jsx";

//input-fields
import InputFieldPage from "./components/Input-field/InputFieldPage.jsx";

//animtion
import HoverAnimationPage from "./components/animation/HoverAnimationPage.jsx";
import ShapeAnimationPage from "./components/animation/ShapeAnimtionPage.jsx";
import RoadMapPage from "./components/animation/RoadMapPage.jsx";
import StatsAnimationPage from "./components/animation/StatsAnimationPage.jsx";
import RailAnimationPage from "./components/animation/RailAnimation.jsx";
import PlanetAnimationPage from "./components/animation/PlanetAnimationPage.jsx";

//Accordion
import SimpleAccordionPage from "./components/accordion/SimpleAccordionPage.jsx";

//input-fields
import SignUpPage from "./components/pages/SignupPage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";

import ComponentsLayout from "./Pages/componentslayout.jsx";
import Components from "./components/components.jsx";
import AppShell from "./Layout/AppLayout .jsx";
import MagneticButtonPage from "./components/buttons/MagneticButtonPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <AppShell>
      <NotFound />
    </AppShell>,
    children: [
      { index: true, element: <LandingPage /> },

      {
        path: "components",
        element: <ComponentsLayout />,
        children: [
          { index: true, element: <Components /> },

          //badge
           { path: "badge/simplebadge", element: <BadgePage /> },
           { path: "badge/animatedbadge", element: <AnimatedBadgePage /> },
            { path: "badge/floatbadge", element: <FloatBadgePage /> },

          //buttons
          { path: "buttons/button", element: <ButtonPage /> },
          { path: "buttons/3d-button", element: <ThreedButtonPage /> },
          { path: "buttons/ontapbutton", element: <OnTapButtonPage /> },
          { path: "buttons/magneticbutton", element: <MagneticButtonPage /> },
          { path: "buttons/capsulebutton", element: <CapsuleButtonPage /> },

          //cards
          { path: "cards/simplecard", element: <SimpleCardPage /> },
          { path: "cards/hovercard", element: <HoverCardPage /> },
          { path: "cards/blocktextCard", element: <BlockTextCardPage /> },
          { path: "cards/stackcards", element: <StackCardsPage /> },
          { path : "cards/tiltcards", element : <TiltCardsPage/>},
          { path : "cards/jobuicard", element : <JobUiCardPage/>},

          //text-field
           { path: "text/textbounce", element: <TextBouncePage /> },
           { path: "text/text-motion", element: <TextMotionPage /> },

           //input-field
           { path: "input/inputfield", element: <InputFieldPage /> },

           //animation
           { path: "animation/hoveranimation", element: <HoverAnimationPage /> },
           { path: "animation/shapeanimation", element: <ShapeAnimationPage /> },
            { path: "animation/roadmap", element: <RoadMapPage /> },
            { path: "animation/statsanimation", element: <StatsAnimationPage /> },
            { path: "animation/railanimation", element: <RailAnimationPage /> },
            { path: "animation/planetanimation", element: <PlanetAnimationPage /> },

            //accordion
            { path: "accordion/simpleaccordion", element: <SimpleAccordionPage /> },

           //pages
           { path: "pages/signuppage", element: <SignUpPage /> },
           { path: "pages/loginpage", element: <LoginPage /> },

          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
     <Analytics />  
  </StrictMode>
);
