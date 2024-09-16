# react-figma-icons

Let the designer design and the coder code! This package adds a simple `Icon` component that acts as an entry point to all your figma SVGs. 

Prevent loose SVGs from bloating your project and tiresome content change pull requests and instead allow Figma to be the single source of truth for all your SVG based graphics, be it icons, logos, or anything you can think of! Simply provide the required environment variables and run `icons:generate`. Your SVGs will be available through the `Icon` component with the name `{FIGMA_COMPONENT_NAME}ICON`.

`react-figma-icons` provides type safety, so your project will warn you if it cannot find any SVG component in the Figma file. Components are not cached, so if you remove an SVG in Figma, it will remove it in the project, even if no new SVGs are added. 

If for whatever reason you want to clear the available icons, you can run `icons:clear`.

## tips

I recommend creating a separate Figma file in your project labelled 'API' that only contains svg components. This way, you can easily control what you expose to your react project. 
