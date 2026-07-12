/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Shellfish",
  "id": "usda-fndds-2706335",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Turtle",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 0.0,
    "energy_kcal": 157.0,
    "fat_g": 5.8,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 1.75,
    "magnesium_mg": 25.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 224.0,
    "potassium_mg": 286.0,
    "protein_g": 24.6,
    "salt_g": 0.7125,
    "sat_fat_g": 0.849,
    "sodium_mg": 285.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.6,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706335",
  "state": "Unspecified",
  "subcategory": "Shellfish",
  "tags": [
    "fish-and-seafood",
    "shellfish",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
