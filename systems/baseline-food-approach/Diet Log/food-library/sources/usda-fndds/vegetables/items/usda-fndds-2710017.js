/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2710017",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Classic mixed vegetables, canned, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 8.59,
    "energy_kcal": 68.0,
    "fat_g": 3.18,
    "fibre_g": 2.5,
    "folate_ug": 24.0,
    "iron_mg": 0.7,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 125.0,
    "protein_g": 2.06,
    "salt_g": 0.63,
    "sat_fat_g": 0.794,
    "sodium_mg": 252.0,
    "sugar_g": 2.72,
    "vitamin_a_ug": 162.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 22.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710017",
  "state": "Canned",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "canned",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
