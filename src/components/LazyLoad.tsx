'use client';

import { Suspense, lazy, ComponentType } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LazyLoadProps {
  component: Promise<{ default: ComponentType<any> }>;
  fallback?: JSX.Element;
  onError?: (error: Error) => void;
}

export default function LazyLoad({ 
  component, 
  fallback = <LoadingSpinner />,
  onError 
}: LazyLoadProps) {
  const LazyComponent = lazy(() => component.catch(error => {
    if (onError) {
      onError(error);
    }
    throw error;
  }));

  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
}

// Example usage:
// const BlogSection = () => (
//   <LazyLoad
//     component={import('./BlogSection')}
//     fallback={<LoadingSpinner size="lg" />}
//     onError={(error) => console.error('Failed to load component:', error)}
//   />
// ); 