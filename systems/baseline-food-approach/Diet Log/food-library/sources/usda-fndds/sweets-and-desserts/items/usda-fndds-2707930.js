/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cookie",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707930",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-cookie",
      "kind": "unit",
      "label": "1 cookie"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cookie, fortune",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 84.0,
    "energy_kcal": 378.0,
    "fat_g": 2.7,
    "fibre_g": 1.6,
    "folate_ug": 66.0,
    "iron_mg": 1.44,
    "magnesium_mg": 7.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 35.0,
    "potassium_mg": 41.0,
    "protein_g": 4.2,
    "salt_g": 0.0775,
    "sat_fat_g": 0.669,
    "sodium_mg": 31.0,
    "sugar_g": 45.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707930",
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
