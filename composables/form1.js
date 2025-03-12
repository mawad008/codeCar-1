import axios from "axios";

export const createFormData = (
  form2,
  form3,
  selectedFileName1,
  selectedFileName2,
  selectedFileName3,
  selectedFileName4,
  bank_offer_id,
  sliderValue1,
  sliderValue2,
  sliderValue3
) => {
  const formData = new FormData();

  // Destructure form values
  const { brand, model, year, gear_shifter, category , color_id } = form2;
  const {
    client_name,
    phone,
    sex,
    birth_date,
    city_id,
    identity_no,
    sector,
    salary,
    bank,
    Monthly_cometment,
    // transferd_type,
    email,
    nationality_id,
    have_life_problem,
    traffic_violations,
    department_loan,
    department_loan_support,
    support_price,
    driving_license,
  } = form3;

  // Fields and values
  const fieldsAndValues = [
    ["brand", brand],
    ["model", model],
    ["year", year],
    ["category", category],
    ["gear_shifter", gear_shifter],
    ["color_id", color_id],
    ["client_name", client_name],
    ["phone", phone],
    ["sex", sex],
    ["nationality_id", nationality_id],
    ["birth_date", birth_date],
    ["city_id", city_id],
    ["identity_no", identity_no],
    ["sector", sector],
    ["salary", salary],
    ["bank", bank],
    ["Monthly_cometment", Monthly_cometment],
    // ["transferd_type", transferd_type],
    ["email", email],
    ["have_life_problem", have_life_problem],
    ["traffic_violations", traffic_violations],
    ["department_loan", department_loan],
    ["department_loan_support", department_loan_support],
    ["support_price", support_price],
    ["driving_license", driving_license],
    ["bank_offer_id", bank_offer_id],
    ["identity_Card", selectedFileName1],
    ["License_Card", selectedFileName2],
    ["Hr_Letter_Image", selectedFileName3],
    ["Insurance_Image", selectedFileName4],
    ["first_batch", sliderValue1],
    ["installment", sliderValue2],
    ["last_batch", sliderValue3],
  ];

  // Append fields and values to FormData
  fieldsAndValues.forEach(([field, value]) => {
    formData.append(field, value);
  });

  return formData;
};
export const createFormData2 = (
  form2,
  form3,
  bank_offer_id,
  sliderValue1,
  sliderValue2,
  sliderValue3
) => {
  const formData = new FormData();

  // Destructure form values
  const { brand, model, year, gear_shifter, category , color_id } = form2;
  const {
    client_name,
    phone,
    sex,
    birth_date,
    city_id,
    identity_no,
    sector,
    salary,
    bank,
    Monthly_cometment,
    // transferd_type,
    email,
    nationality_id,
    have_life_problem,
    traffic_violations,
    department_loan,
    department_loan_support,
    support_price,
    driving_license,
  } = form3;

  // Fields and values
  const fieldsAndValues = [
    ["brand", brand],
    ["model", model],
    ["year", year],
    ["gear_shifter", gear_shifter],
    ["color_id", color_id],
    ["client_name", client_name],
    ["category", category],
    ["phone", phone],
    ["sex", sex],
    ["nationality_id", nationality_id],
    ["birth_date", birth_date],
    ["city_id", city_id],
    ["identity_no", identity_no],
    ["sector", sector],
    ["salary", salary],
    ["bank", bank],
    ["Monthly_cometment", Monthly_cometment],
    // ["transferd_type", transferd_type],
    ["email", email],
    ["department_loan_support", department_loan_support],
    ["support_price", support_price],
    ["have_life_problem", have_life_problem],
    ["traffic_violations", traffic_violations],
    ["department_loan", department_loan],
    ["driving_license", driving_license],
    ["bank_offer_id", bank_offer_id],
    ["first_batch", sliderValue1],
    ["installment", sliderValue2],
    ["last_batch", sliderValue3],
  ];

  // Append fields and values to FormData
  fieldsAndValues.forEach(([field, value]) => {
    formData.append(field, value);
  });

  return formData;
};
export const createFormData1 = (
  form2,
  form3,
  sliderValue1,
  sliderValue2,
  sliderValue3,
) => {
  const formData = new FormData();

  // Destructure form values
  const { brand, model, year, gear_shifter, color_id , category} = form2;
  const {
    client_name,
    phone,
    sex,
    birth_date,
    city_id,
    identity_no,
    sector,
    salary,
    bank,
    Monthly_cometment,
    // transferd_type,
    email,
    nationality_id,
    have_life_problem,
    traffic_violations,
    department_loan,
    department_loan_support,
    support_price,
    driving_license,

  } = form3;

  // Fields and values
  const fieldsAndValues = [
    ["brand", brand],
    ["model", model],
    ["year", year],
    ["gear_shifter", gear_shifter],
    ["color_id", color_id],
    ["client_name", client_name],
    ["phone", phone],
    ["sex", sex],
    ["category", category],
    ["nationality_id", nationality_id],
    ["birth_date", birth_date],
    ["city_id", city_id],
    ["identity_no", identity_no],
    ["sector", sector],
    ["salary", salary],
    ["department_loan_support", department_loan_support],
    ["support_price", support_price],
    ["bank", bank],
    ["Monthly_cometment", Monthly_cometment],
    // ["transferd_type", transferd_type],
    ["email", email],
    ["have_life_problem", have_life_problem],
    ["traffic_violations", traffic_violations],
    ["department_loan", department_loan],
    ["driving_license", driving_license],
    ["first_batch", sliderValue1],
    ["installment", sliderValue2],
    ["last_batch", sliderValue3],
  ];

  // Append fields and values to FormData
  fieldsAndValues.forEach(([field, value]) => {
    formData.append(field, value);
  });

  return formData;
};

