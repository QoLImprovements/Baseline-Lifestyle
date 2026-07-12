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
  "id": "usda-fndds-2707935",
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
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-small-bar",
      "kind": "unit",
      "label": "1 small bar"
    }
  ],
  "name": "Cookie, lemon bar",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 62.6,
    "energy_kcal": 437.0,
    "fat_g": 18.9,
    "fibre_g": 0.8,
    "folate_ug": 40.0,
    "iron_mg": 1.84,
    "magnesium_mg": 10.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 72.0,
    "potassium_mg": 71.0,
    "protein_g": 5.13,
    "salt_g": 0.56,
    "sat_fat_g": 3.75,
    "sodium_mg": 224.0,
    "sugar_g": 42.1,
    "vitamin_a_ug": 201.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 2.07,
    "vitamin_k_ug": 19.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707935",
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
