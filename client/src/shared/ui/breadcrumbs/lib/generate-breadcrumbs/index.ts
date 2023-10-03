export interface BreadcrumbsItem {
  path: string;
  title: string;
}

interface GenerateBreadcrumbsProps {
  setBreadcrumbs: (breadcrumbs: BreadcrumbsItem[]) => void;
}

export const generateBreadcrumbs = ({
  setBreadcrumbs,
}: GenerateBreadcrumbsProps) => {
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
