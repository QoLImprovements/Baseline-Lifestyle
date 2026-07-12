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
  "id": "usda-fndds-2707926",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-small-bar",
      "kind": "unit",
      "label": "1 small bar"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-large-bar",
      "kind": "unit",
      "label": "1 large bar"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "1-medium-bar",
      "kind": "unit",
      "label": "1 medium bar"
    }
  ],
  "name": "Cookie bar, with chocolate, nuts, and graham crackers",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 65.4,
    "energy_kcal": 492.0,
    "fat_g": 24.7,
    "fibre_g": 2.0,
    "folate_ug": 72.0,
    "iron_mg": 5.58,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 171.0,
    "protein_g": 5.1,
    "salt_g": 0.7775,
    "sat_fat_g": 8.09,
    "sodium_mg": 311.0,
    "sugar_g": 32.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.01,
    "vitamin_k_ug": 33.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707926",
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
