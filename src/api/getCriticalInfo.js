import request from "request";

// Returns a list of each field critical to display to the user
// Example inputs:
//  getCriticalInfo('ibuprofen')
export default async function getCriticalInfo(drugName) {
  const importantFields = [
    "active_ingredient", // step 1
    "generic_name", // step 1
    "substance_name", // step 1
    "route", // step 1
    "indications_and_usage", // step 1
    "product_type", // step 1
    "purpose", // step 1
    "warnings", // step 1

    "ask_doctor", // step 2
    "ask_doctor_or_pharmacist", //  step 2
    "do_not_use", // step2
    "pregnancy_or_breast_feeding", // step 2

    "when_using", //step 3
    "stop_use", // Step 3
    "storage_and_handling", // step 3
    "dosage_and_administration" // step 3
  ];
  let info = new Promise((resolve, reject) => {
    request(
      {
        uri:
          "https://api.fda.gov/drug/label.json?search=openfda.brand_name:" +
          drugName
      },
      function(error, response, body) {
        let drugFields = JSON.parse(body).results[0];
        let formattedData = {};
        for (let key of importantFields) {
          // console.log(key + ": " + drugFields[key]);
          if (drugFields[key] != undefined) {
            formattedData[key] = drugFields[key][0];
          } else {
            formattedData[key] = "N/A";
          }
        }
        if ("openfda" in drugFields) {
          for (let key of importantFields) {
            console.log(key + ": " + drugFields[key]);
            if (drugFields["openfda"][key] != undefined) {
              formattedData[key] = drugFields["openfda"][key][0];
            } else if (!(key in formattedData)) {
              formattedData[key] = "N/A";
            }
          }
        }

        resolve(formattedData);
      }
    );
  });
  return info;
}
