/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-large-bar",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707991",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-large-bar",
      "kind": "unit",
      "label": "1 large bar"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-large-cookie",
      "kind": "unit",
      "label": "1 large cookie"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-small-cookie",
      "kind": "unit",
      "label": "1 small cookie"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "1-medium-bar",
      "kind": "unit",
      "label": "1 medium bar"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-medium-cookie",
      "kind": "unit",
      "label": "1 medium cookie"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-small-bar",
      "kind": "unit",
      "label": "1 small bar"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-mini-or-bite-size-cookie",
      "kind": "unit",
      "label": "1 mini or bite size cookie"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cookie, gluten free",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 76.0,
    "energy_kcal": 474.0,
    "fat_g": 17.9,
    "fibre_g": 2.5,
    "folate_ug": 0.0,
    "iron_mg": 2.81,
    "magnesium_mg": 40.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 70.0,
    "potassium_mg": 157.0,
    "protein_g": 2.19,
    "salt_g": 0.6875,
    "sat_fat_g": 7.9,
    "sodium_mg": 275.0,
    "sugar_g": 49.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.31,
    "vitamin_k_ug": 25.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707991",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
