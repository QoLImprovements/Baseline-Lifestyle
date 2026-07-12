/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-small",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707989",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Cookie, sugar wafer, sugar free",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 66.3,
    "energy_kcal": 531.0,
    "fat_g": 28.6,
    "fibre_g": 14.3,
    "folate_ug": 42.0,
    "iron_mg": 1.29,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 57.0,
    "protein_g": 3.57,
    "salt_g": 0.1775,
    "sat_fat_g": 4.26,
    "sodium_mg": 71.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.08,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707989",
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
