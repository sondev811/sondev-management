export const LOADING = 'LOADING';
export const setLoadingAction = (loading) => {
  return {
    type: LOADING,
    payload: loading
  };
};
