/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-whole-canned",
  "description": "White potatoes, baked or boiled",
  "id": "usda-fndds-2709400",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-whole-canned",
      "kind": "unit",
      "label": "1 whole, canned"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, canned, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 12.9,
    "energy_kcal": 94.0,
    "fat_g": 4.35,
    "fibre_g": 2.3,
    "folate_ug": 6.0,
    "iron_mg": 1.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 27.0,
    "potassium_mg": 218.0,
    "protein_g": 1.34,
    "salt_g": 0.415,
    "sat_fat_g": 1.14,
    "sodium_mg": 166.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709400",
  "state": "Canned",
  "subcategory": "White potatoes, baked or boiled",
  "tags": [
    "canned",
    "potatoes-and-starchy-vegetables",
    "white-potatoes-baked-or-boiled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
