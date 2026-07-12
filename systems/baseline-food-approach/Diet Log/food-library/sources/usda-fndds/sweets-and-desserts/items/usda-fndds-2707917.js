/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-pie-nfs",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707917",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "1-pie-nfs",
      "kind": "unit",
      "label": "1 pie, NFS"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "1-moon-pie",
      "kind": "unit",
      "label": "1 moon pie"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "1-little-debbie",
      "kind": "unit",
      "label": "1 Little Debbie"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-whoopie-pie",
      "kind": "unit",
      "label": "1 whoopie pie"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "1-scooter-pie",
      "kind": "unit",
      "label": "1 scooter pie"
    }
  ],
  "name": "Cookie, marshmallow pie, chocolate covered",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 67.7,
    "energy_kcal": 421.0,
    "fat_g": 16.9,
    "fibre_g": 2.0,
    "folate_ug": 23.0,
    "iron_mg": 2.53,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 182.0,
    "protein_g": 4.0,
    "salt_g": 0.47,
    "sat_fat_g": 4.72,
    "sodium_mg": 188.0,
    "sugar_g": 44.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707917",
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
