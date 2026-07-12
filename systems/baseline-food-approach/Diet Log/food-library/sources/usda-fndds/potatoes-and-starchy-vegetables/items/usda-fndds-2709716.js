/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-piece",
  "description": "Fried vegetables",
  "id": "usda-fndds-2709716",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sweet potato tots, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 34.9,
    "energy_kcal": 240.0,
    "fat_g": 15.6,
    "fibre_g": 5.6,
    "folate_ug": 30.0,
    "iron_mg": 0.76,
    "magnesium_mg": 25.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 58.0,
    "potassium_mg": 401.0,
    "protein_g": 2.12,
    "salt_g": 0.7375,
    "sat_fat_g": 3.38,
    "sodium_mg": 295.0,
    "sugar_g": 12.6,
    "vitamin_a_ug": 425.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 2.18,
    "vitamin_k_ug": 15.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709716",
  "state": "Unspecified",
  "subcategory": "Fried vegetables",
  "tags": [
    "fried-vegetables",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
