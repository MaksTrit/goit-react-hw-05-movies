import { Grid } from 'react-loader-spinner';

export const Loader = ({ margin }) => {
  return (
    <Grid
      height="140"
      width="140"
      color="#07575B"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: margin,
        marginBottom: margin,
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
