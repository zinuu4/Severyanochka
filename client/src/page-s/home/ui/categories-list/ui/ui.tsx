import { CategoriesListItem } from '../../categories-list-item';

import { productCategories } from '../config';

export const CategoriesList = () => {
  return (
    <div>
      {productCategories.map((category) => (
        <CategoriesListItem 
          endpoint={category.endpoint} 
          params={category.params} 
          title={category.title} 
          subtitle={category.subtitle} 
        />
      ))}
    </div>
  )
}