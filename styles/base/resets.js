// Resets
// --------------------

export default `
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}

#__next {
  position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px; /* Increase/Decrease this value for cross-browser compatibility */
    overflow-y: scroll;
    @media all and (max-width:768px){
      right: 0;
    }
}


a {
  color: inherit;
  text-decoration: none;
  &:focus {
    outline: none;
  }
}

svg {
  fill: currentColor;
}

/* Remove button styling */
button {
  padding: 0;
  color: inherit;
  cursor: pointer;
  background: transparent;
  border: 0;
  appearance: none;
}

input {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul,
  ol {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core root defaults */

  html {
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements */
  ul,
  ol {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    display: block;
    max-width: 100%;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  /* stylelint-disable scss/media-feature-value-dollar-variable, declaration-no-important */
  @media (prefers-reduced-motion: reduce) {
    * {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }

  .a-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);  
  }

  .a-hidden-desktop {
    display: none;
    @media all and (max-width:768px){
      display: block;
    }
  }
  
  .a-hidden-mobile {
    @media all and (max-width:768px){
      display: none;
    }
  }
`;
