// Import statements if needed
// const { searchPeople } = require('some-library');
// Assuming searchLinkedIn is properly imported or defined in your code



function getLinkedinProfileUrl(navigationUrl) {
    return navigationUrl?.split("?")?.[0];
  }
  
  function getHandle(linkedinProfileUrl) {
    const url = getLinkedinProfileUrl(linkedinProfileUrl);
    return url?.split("/in/")?.[1];
  }
  
  async function searchLinkedIn(query) {
    try {
      const search = await searchPeople(query);
      const peoplesProfiles = search?.included?.filter(
        (s) => s?.template === "UNIVERSAL"
      );
      const jsonify = peoplesProfiles.map((p) => {
        return {
          name: p?.title?.text,
          handle: getHandle(p?.navigationUrl),
          jobTitle: p?.primarySubtitle?.text,
          summary: p?.summary?.text,
          location: p?.secondarySubtitle?.text,
          image:
            p?.image?.attributes?.[0]?.detailData?.nonEntityProfilePicture
              ?.vectorImage?.artifacts?.[0]?.fileIdentifyingUrlPathSegment,
          url: getLinkedinProfileUrl(p?.navigationUrl),
        };
      });
      return jsonify;
    } catch (error) {
      console.log("error at search: ", error.message);
      return []; // Return an empty array or handle the error as needed
    }
  }
  
  module.exports = {
    searchLinkedIn,
  };
  