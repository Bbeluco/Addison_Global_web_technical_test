export type ResponseType = PromotionType[];

type PromotionType = {
  id: string;
  name: string;
  description: string;
  heroImageUrl: string;
  onlyNewCustomers: boolean;
  termsAndConditionsButtonText: string;
  joinNowButtonText: string;
  sequence: number;
};
