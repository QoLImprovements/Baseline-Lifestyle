/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Fish",
  "id": "usda-fndds-2706284",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish, salmon, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 188.0,
    "fat_g": 11.2,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 0.35,
    "magnesium_mg": 27.0,
    "omega3_g": 1.909,
    "phosphorus_mg": 245.0,
    "potassium_mg": 364.0,
    "protein_g": 20.4,
    "salt_g": 0.1575,
    "sat_fat_g": 2.49,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 2.76,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706284",
  "state": "Raw",
  "subcategory": "Fish",
  "tags": [
    "fish",
    "fish-and-seafood",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
