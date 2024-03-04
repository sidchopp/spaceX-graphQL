const paginate = (launch) => {
  const { launchesPast } = launch;

  // Filter out arrays with null or undefined details field
  const filteredLaunches = launchesPast.filter(item => item.details !== null && item.details !== undefined);

  const launchesPerPage = 12;
  const pages = Math.ceil(filteredLaunches.length / launchesPerPage);

  const newLaunches = Array.from({ length: pages }, (_, index) => {
    const start = index * launchesPerPage;
    return filteredLaunches.slice(start, start + launchesPerPage);
  });

  return newLaunches;
};


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export  {paginate, scrollToTop};
