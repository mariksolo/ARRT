import request from "request";

// Returns a list of the names of the substance that interact with drugName
// Example inputs:
//  getInteractions('ibuprofen')
//  getInteractions('grapefruit+juice')
export default async function getInteractions(drugName) {
  let info = new Promise((resolve, reject) => {
    request(
      {
        uri:
          "https://api.fda.gov/drug/label.json?search=drug_interactions:" +
          drugName +
          "&count=openfda.brand_name.exact"
      },
      function(error, response, body) {
        // Should fix overly long line
        const formattedData = [
          ...new Set(
            JSON.parse(body)
              .results.map(item => item.term.toLowerCase())
              .filter(item => !item.includes(drugName.toLowerCase()))
          )
        ];
        resolve(formattedData);
      }
    );
  });
  return info;
}
