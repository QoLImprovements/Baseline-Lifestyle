/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707981",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-small-or-bite-size",
      "kind": "unit",
      "label": "1 small or bite size"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Cookie, vanilla wafer",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 72.6,
    "energy_kcal": 455.0,
    "fat_g": 16.4,
    "fibre_g": 1.6,
    "folate_ug": 83.0,
    "iron_mg": 2.79,
    "magnesium_mg": 12.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 88.0,
    "potassium_mg": 99.0,
    "protein_g": 4.9,
    "salt_g": 0.8125,
    "sat_fat_g": 4.24,
    "sodium_mg": 325.0,
    "sugar_g": 35.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.27,
    "vitamin_k_ug": 29.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707981",
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
