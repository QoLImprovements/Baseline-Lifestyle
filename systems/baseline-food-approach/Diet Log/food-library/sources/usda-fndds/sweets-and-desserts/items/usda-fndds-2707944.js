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
  "id": "usda-fndds-2707944",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-cookie",
      "kind": "unit",
      "label": "1 cookie"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cookie, multigrain, high fiber",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 66.7,
    "energy_kcal": 464.0,
    "fat_g": 17.6,
    "fibre_g": 3.1,
    "folate_ug": 81.0,
    "iron_mg": 3.18,
    "magnesium_mg": 101.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 277.0,
    "potassium_mg": 326.0,
    "protein_g": 9.8,
    "salt_g": 0.6275,
    "sat_fat_g": 12.7,
    "sodium_mg": 251.0,
    "sugar_g": 27.5,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 15.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707944",
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
