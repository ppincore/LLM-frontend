type ErrorData = Partial<{
  message: string;
}>;

export type FetchBaseQueryErrorCustom = {
  status: number;
  data?: ErrorData
};
