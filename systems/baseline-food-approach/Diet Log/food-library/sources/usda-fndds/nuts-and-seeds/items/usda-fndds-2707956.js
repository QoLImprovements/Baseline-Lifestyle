/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707956",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-girl-scout-cookie",
      "kind": "unit",
      "label": "1 Girl Scout cookie"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-little-debbie-nutty-bar",
      "kind": "unit",
      "label": "1 Little Debbie Nutty Bar"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 8.3,
      "key": "1-lance-wafer",
      "kind": "unit",
      "label": "1 Lance Wafer"
    }
  ],
  "name": "Cookie, with peanut butter filling, chocolate-coated",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 52.9,
    "energy_kcal": 562.0,
    "fat_g": 35.3,
    "fibre_g": 3.5,
    "folate_ug": 63.0,
    "iron_mg": 2.1,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 217.0,
    "protein_g": 8.1,
    "salt_g": 0.9275,
    "sat_fat_g": 19.2,
    "sodium_mg": 371.0,
    "sugar_g": 30.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.32,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707956",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
