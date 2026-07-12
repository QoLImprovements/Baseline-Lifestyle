/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fish",
  "id": "usda-fndds-2706230",
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
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fish, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 0.0,
    "energy_kcal": 116.0,
    "fat_g": 0.96,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.4,
    "magnesium_mg": 54.0,
    "omega3_g": 0.272,
    "phosphorus_mg": 251.0,
    "potassium_mg": 415.0,
    "protein_g": 25.2,
    "salt_g": 1.9075,
    "sat_fat_g": 0.173,
    "sodium_mg": 763.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706230",
  "state": "Unspecified",
  "subcategory": "Fish",
  "tags": [
    "fish",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
