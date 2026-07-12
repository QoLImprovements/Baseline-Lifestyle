/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707898",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cookie, batter or dough, raw",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 54.5,
    "energy_kcal": 435.0,
    "fat_g": 22.4,
    "fibre_g": 0.9,
    "folate_ug": 60.0,
    "iron_mg": 2.16,
    "magnesium_mg": 12.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 69.0,
    "potassium_mg": 80.0,
    "protein_g": 4.97,
    "salt_g": 1.3325,
    "sat_fat_g": 4.33,
    "sodium_mg": 533.0,
    "sugar_g": 29.2,
    "vitamin_a_ug": 231.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 2.46,
    "vitamin_k_ug": 24.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707898",
  "state": "Raw",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "raw",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
