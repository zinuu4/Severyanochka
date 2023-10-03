export interface BreadcrumbsItem {
  path: string;
  title: string;
}

interface UseGenerateBreadcrumbsProps {
  setBreadcrumbs: (breadcrumbs: BreadcrumbsItem[]) => void;
}

export const GenerateBreadcrumbs = ({
  setBreadcrumbs,
}: UseGenerateBreadcrumbsProps) => {
  const urlSegments = window.location.pathname
    .split('/')
    .filter((segment) => segment !== '');
  let currentPath = '/';
  const breadcrumbItems = [{ path: '/', title: 'Home' }];

  for (let i = 0; i < urlSegments.length; i += 1) {
    currentPath += `${urlSegments[i]}/`;

    breadcrumbItems.push({ path: currentPath, title: urlSegments[i] });
  }

  setBreadcrumbs(breadcrumbItems);
};
