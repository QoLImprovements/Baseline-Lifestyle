/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-little-debbie-cookie",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707913",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-little-debbie-cookie",
      "kind": "unit",
      "label": "1 Little Debbie cookie"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-bar-2-square-1-1-8-high",
      "kind": "unit",
      "label": "1 bar (2\" square, 1-1/8\" high)"
    }
  ],
  "name": "Cookie, chocolate, made with rice cereal",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 63.3,
    "energy_kcal": 440.0,
    "fat_g": 19.4,
    "fibre_g": 1.6,
    "folate_ug": 24.0,
    "iron_mg": 2.49,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 227.0,
    "protein_g": 3.23,
    "salt_g": 0.525,
    "sat_fat_g": 11.3,
    "sodium_mg": 210.0,
    "sugar_g": 40.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.96,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707913",
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
