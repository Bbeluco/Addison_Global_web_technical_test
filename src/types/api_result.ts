export type ResponseType = PromotionType[];

export type PromotionType = {
  id: string;
  name: string;
  description: string;
  heroImageUrl: string;
  onlyNewCustomers: boolean;
  termsAndConditionsButtonText: string;
  joinNowButtonText: string;
  sequence: number;
};
