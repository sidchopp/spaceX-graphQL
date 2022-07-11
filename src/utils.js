const paginate = (launch) => {
  const { launchesPast } = launch;
  //   console.log(launchesPast);
  const launchesPerPage = 12;
  const pages = Math.ceil(launchesPast.length / launchesPerPage);
  const newLaunches = Array.from({ length: pages }, (_, index) => {
    const start = index * launchesPerPage;
    return launchesPast.slice(start, start + launchesPerPage);
  });
  //   console.log(newLaunches);
  return newLaunches;
};
export default paginate;
