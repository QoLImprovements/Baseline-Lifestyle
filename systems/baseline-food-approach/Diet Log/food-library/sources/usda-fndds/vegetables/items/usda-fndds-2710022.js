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
  "id": "usda-fndds-2710022",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Classic mixed vegetables, canned, reduced sodium, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 9.19,
    "energy_kcal": 44.0,
    "fat_g": 0.45,
    "fibre_g": 2.4,
    "folate_ug": 27.0,
    "iron_mg": 0.81,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 131.0,
    "protein_g": 1.95,
    "salt_g": 0.0375,
    "sat_fat_g": 0.07,
    "sodium_mg": 15.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 167.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 17.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710022",
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
