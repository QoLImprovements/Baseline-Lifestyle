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
  "id": "usda-fndds-2707902",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-cookie",
      "kind": "unit",
      "label": "1 cookie"
    }
  ],
  "name": "Cookie, biscotti",
  "nutritionPerBasis": {
    "calcium_mg": 112.0,
    "carbs_g": 67.0,
    "energy_kcal": 373.0,
    "fat_g": 8.38,
    "fibre_g": 1.4,
    "folate_ug": 62.0,
    "iron_mg": 3.15,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 205.0,
    "potassium_mg": 97.0,
    "protein_g": 7.63,
    "salt_g": 0.655,
    "sat_fat_g": 1.29,
    "sodium_mg": 262.0,
    "sugar_g": 28.4,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707902",
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
