/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-medium",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707949",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    }
  ],
  "name": "Cookie, oatmeal, with chocolate chips",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 67.6,
    "energy_kcal": 457.0,
    "fat_g": 20.9,
    "fibre_g": 3.5,
    "folate_ug": 48.0,
    "iron_mg": 2.71,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 195.0,
    "protein_g": 5.72,
    "salt_g": 0.9975,
    "sat_fat_g": 7.66,
    "sodium_mg": 399.0,
    "sugar_g": 31.7,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707949",
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
