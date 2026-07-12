/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2710023",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 93.0,
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
  "name": "Classic mixed vegetables, canned, reduced sodium, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 8.93,
    "energy_kcal": 68.0,
    "fat_g": 3.2,
    "fibre_g": 2.3,
    "folate_ug": 26.0,
    "iron_mg": 0.79,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 128.0,
    "protein_g": 1.9,
    "salt_g": 0.06,
    "sat_fat_g": 0.79,
    "sodium_mg": 24.0,
    "sugar_g": 2.85,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 19.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710023",
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
