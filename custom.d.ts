declare namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        autoRotate?: boolean;
        cameraControls?: boolean;
        autoRotateDelay?: string;
        cameraOrbit?: string;
        interactionPrompt?: string;
        disableZoom?: boolean;
        style?: React.CSSProperties;
      };
    }
  }
  