import React, { useState, useEffect } from 'react';

const DynamicComponent = ({ componentName }: { componentName: string }) => {
  const [DynamicComponent, setDynamicComponent] = useState<any>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const dynamicImport = await import(`../${componentName}/index`);
        const { default: LoadedComponent } = dynamicImport;

        setDynamicComponent(() => LoadedComponent);
      } catch (error) {
        console.error('Error loading component:', error);
      }
    };

    loadComponent();
  }, [componentName]);

  return DynamicComponent ? <DynamicComponent /> : null;
};

export default DynamicComponent;
