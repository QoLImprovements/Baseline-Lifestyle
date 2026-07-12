/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709871",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bean sprouts, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 6.08,
    "energy_kcal": 116.0,
    "fat_g": 6.93,
    "fibre_g": 3.3,
    "folate_ug": 40.0,
    "iron_mg": 2.8,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 299.0,
    "protein_g": 9.8,
    "salt_g": 0.315,
    "sat_fat_g": 1.31,
    "sodium_mg": 126.0,
    "sugar_g": 2.83,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 22.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709871",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "legumes-and-pulses",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
