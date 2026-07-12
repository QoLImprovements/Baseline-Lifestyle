/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cookie",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707992",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-cookie",
      "kind": "unit",
      "label": "1 cookie"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cookies, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 67.9,
    "energy_kcal": 506.0,
    "fat_g": 23.2,
    "fibre_g": 1.6,
    "folate_ug": 65.0,
    "iron_mg": 3.27,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 79.0,
    "protein_g": 6.32,
    "salt_g": 0.6775,
    "sat_fat_g": 8.82,
    "sodium_mg": 271.0,
    "sugar_g": 23.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707992",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
