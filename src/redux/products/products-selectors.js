export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;

export const selectProducts = state => state.products.items;
export const selectById = state => state.products.detailsItem;
