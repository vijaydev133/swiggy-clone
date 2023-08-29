export const filteredData = (src, res) => {
  //   console.log(src, res);
  return res?.filter((d) =>
    d?.info?.name?.toLowerCase()?.includes(src?.toLowerCase())
  );
};
