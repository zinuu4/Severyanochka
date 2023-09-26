export enum ProductType {
  Discount = 'discount',
  Novelties = 'novelties',
  BoughtBefore = 'boughtbefore',
}

export type UserRole = 'user' | 'admin';

export type Image = {
  url: string;
}

export type Category = {
  name: string;
  subCategories?: string[];
}

export type Info = {
  brand: string;
  manufacturerCountry: string;
  weight: string;
}

export type Review = {
  id: string;
  user: User;
  score: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ReviewsSummary = {
  totalReviewsQuantity: number;
  finalEvaluation: number;
  fivePointsQuantity: number;
  fourPointsQuantity: number;
  threePointsQuantity: number;
  twoPointsQuantity: number;
  onePointsQuantity: number;
}

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type Product = {
  id: string;
  article: number;
  available: boolean;
  name: string;
  images: Image[];
  price: number;
  category: Category;
  info: Info;
  reviews: Review[];
  reviewsSummary: ReviewsSummary;
  discounted?: boolean;
  discountPercentage?: number;
  discountedPrice?: number;
  bonusAmount: number;
  subCategory?: string[];
  createdAt: Date;
  updatedAt: Date;
}
