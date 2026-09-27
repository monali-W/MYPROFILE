export const EXPERIENCE = {
  role: "Lead Front-End Developer",
  company: "AspenTech",
  location: "MA",
  dates: "May 2022 – Present",
  summary:
    "I own front-end architecture for AspenTech's engineering-simulation platform — spanning cloud web apps, desktop UIs embedded via WebView2, and the shared component libraries used across a large Nx monorepo."
};

export const HIGHLIGHTS = [
  {
    id: "nge-platform",
    name: "NGE Front-End Simulator Platform",
    stack: "Angular, TypeScript, Nx",
    blurb:
      "Architected the shared library layer of a 17+ library Nx monorepo — GraphQL, unit-of-measure, dynamic forms, and shared services — so feature teams compose apps without duplicating domain logic."
  },
  {
    id: "physical-properties",
    name: "Physical Properties Web App",
    stack: "Angular Elements, WebView2",
    blurb:
      "Built a backend-independent Angular library, published to Artifactory, that runs unchanged against either the cloud NGE backend or the native HYSYS calculation engine embedded in the desktop product."
  },
  {
    id: "hysys-web-forms",
    name: "HYSYS Web Forms",
    stack: "Angular 21, ngx-formly, WebView2",
    blurb:
      "Led the front-end for modernizing legacy native HYSYS dialogs with an embedded Angular app rendered via WebView2 inside the C++/C# simulator shell — new engine dialogs now ship with zero front-end code changes."
  },
  {
    id: "aimb",
    name: "AIMB — Inferential Model Builder",
    stack: "Angular, Nx",
    blurb:
      "Built core AIMB screens end-to-end — dataset management, model configuration, data-cleaning workflows, and analyze/deploy pages — with i18n and test coverage alongside feature work."
  }
];
