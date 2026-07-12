/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709797",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Green peas, raw",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 14.4,
    "energy_kcal": 81.0,
    "fat_g": 0.4,
    "fibre_g": 5.7,
    "folate_ug": 65.0,
    "iron_mg": 1.47,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 244.0,
    "protein_g": 5.42,
    "salt_g": 0.0125,
    "sat_fat_g": 0.071,
    "sodium_mg": 5.0,
    "sugar_g": 5.67,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 40.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 24.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709797",
  "state": "Raw",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "other-starchy-vegetables",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
