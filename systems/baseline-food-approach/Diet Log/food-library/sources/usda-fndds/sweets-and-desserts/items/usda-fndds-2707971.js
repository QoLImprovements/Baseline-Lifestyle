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
  "id": "usda-fndds-2707971",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-cookie",
      "kind": "unit",
      "label": "1 cookie"
    }
  ],
  "name": "Marie biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 70.5,
    "energy_kcal": 406.0,
    "fat_g": 10.6,
    "fibre_g": 3.5,
    "folate_ug": 118.0,
    "iron_mg": 0.0,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 193.0,
    "potassium_mg": 307.0,
    "protein_g": 7.05,
    "salt_g": 0.925,
    "sat_fat_g": 5.29,
    "sodium_mg": 370.0,
    "sugar_g": 21.2,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707971",
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
