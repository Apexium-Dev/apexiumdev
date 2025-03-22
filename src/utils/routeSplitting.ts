import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

interface DynamicImportOptions {
  ssr?: boolean;
}

export const dynamicRoute = <T extends object>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  options: DynamicImportOptions = {}
) => {
  return dynamic(importFunc, {
    loading: () => <LoadingSpinner size="lg" />,
    ssr: true,
    ...options,
  });
};

// Example usage:
// const DynamicBlogPage = dynamicRoute(() => import('@/app/blog/page'));
// const DynamicProjectsSection = dynamicRoute(
//   () => import('@/components/Projects'),
//   { ssr: false }
// ); 