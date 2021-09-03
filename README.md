Pre-configured and Ready to use React Starter App. To save time in settings things up for new project.
Directory Structure

This document aims to describe the React Js directory structure for building our project.
The top level directory structure will be as follows:

components : Global components, such as layout (wrappers, navigation), form components, buttons.
resources: Global static resources as images, fonts and styles to apply on components.
routes: Main router that contains the pages.
.
└── /src
    ├── /components
    ├── /resources
    ├── /routes
    ├── index.js

Src contains everything, index.js is the entry point, and App.js sets up the auth and routing.

Components
Within the components folder, I would group by type - forms, tables, buttons, layout, etc. 
.
└── /src
    └── /components
        ├── /forms
        │   ├── /TextField
        │   │   ├── TextField.js
        └── /layout
            └── /navigation
                └── /NavBar
                    ├── NavBar.js
           
resources:
Within the resources folder, I would group by fonts, images and css styles.

└── /src
    └── /style
        ├── /forms
        │   ├── form.css
        └── /layout
         |   └─|─ /navigation
         |        |── /NavBar.css
         |     |── /layout
         |── /navigation
                └── /NavBar.css
└── /fonts
        ├── font-samples
         |── font-samples
         └── /images
        ├── images-samples
         |── images-samples

routes:
Within the resources folder, I would group the router components

└── /src
    └── /routes
        ├── App.js
