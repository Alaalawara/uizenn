// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import RootLayout from "./Layout/RootLayout.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import NotFound from "./Pages/notfound.jsx";

// Components area
//buttons
import ButtonPage from "./components/buttons/ButtonPage.jsx";
import ThreedButtonPage from "./components/buttons/3dbuttonPage.jsx";
import OnTapButtonPage from "./components/buttons/OntapButtonPage.jsx";

import ExampleButtonPage from "./components/buttons/Example.jsx";

//cards
import SimpleCardPage from "./components/cards/SimpleCardPage.jsx";
import HoverCardPage from "./components/cards/Hovercard.jsx";
import BlockTextCardPage from "./components/cards/BlockTextCards.jsx";
import StackCardsPage from "./components/cards/StackCardsPage.jsx";

//badge
import BadgePage from "./components/badges/Badge.jsx";
import AnimatedBadgePage from "./components/badges/AnimatedBadge.jsx";

//text
import TextBouncePage from "./components/texts/TextBouncePage.jsx";
import TextMotionPage from "./components/texts/TextMotionPage.jsx";

//input-fields
import InputFieldPage from "./components/Input-field/InputFieldPage.jsx";

//animtion
import HoverAnimationPage from "./components/animation/HoverAnimationPage.jsx";
import ShapeAnimationPage from "./components/animation/ShapeAnimtionPage.jsx";

//input-fields
import SignUpPage from "./components/pages/SignupPage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";

import ComponentsLayout from "./Pages/componentslayout.jsx";
import Components from "./components/components.jsx";
import AppShell from "./Layout/AppLayout .jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <AppShell>
      <NotFound />
    </AppShell>, // persistent header/footer
    children: [
      { index: true, element: <LandingPage /> },

      {
        path: "components",
        element: <ComponentsLayout />,   // sidebar + Outlet
        children: [
          { index: true, element: <Components /> }, // grid listing

          //badge
           { path: "badge/simplebadge", element: <BadgePage /> },
           { path: "badge/animatedbadge", element: <AnimatedBadgePage /> },

          //buttons
          { path: "buttons/button", element: <ButtonPage /> },
          { path: "buttons/3d-button", element: <ThreedButtonPage /> },
          { path: "buttons/ontapbutton", element: <OnTapButtonPage /> },
          { path: "buttons/examplebutton", element: <ExampleButtonPage /> },

          //cards
          { path: "cards/simplecard", element: <SimpleCardPage /> },
          { path: "cards/hovercard", element: <HoverCardPage /> },
          { path: "cards/blocktextCard", element: <BlockTextCardPage /> },
          { path: "cards/stackcards", element: <StackCardsPage /> },

          //text-field
           { path: "text/textbounce", element: <TextBouncePage /> },
           { path: "text/text-motion", element: <TextMotionPage /> },

           //input-field
           { path: "input/inputfield", element: <InputFieldPage /> },

           //animation
           { path: "animation/hoveranimation", element: <HoverAnimationPage /> },
           { path: "animation/shapeanimation", element: <ShapeAnimationPage /> },

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
  </StrictMode>
);
