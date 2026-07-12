/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709612",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Poke greens, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 3.01,
    "energy_kcal": 42.0,
    "fat_g": 2.93,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 1.16,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 178.0,
    "protein_g": 2.24,
    "salt_g": 0.345,
    "sat_fat_g": 0.755,
    "sodium_mg": 138.0,
    "sugar_g": 1.55,
    "vitamin_a_ug": 432.0,
    "vitamin_c_mg": 79.4,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 107.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709612",
  "state": "Cooked",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "cooked",
    "other-dark-green-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
