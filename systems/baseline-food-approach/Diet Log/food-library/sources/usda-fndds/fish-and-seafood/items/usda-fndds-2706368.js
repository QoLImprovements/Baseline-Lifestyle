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
  "id": "usda-fndds-2706368",
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
      "gramsPerUnit": 5.0,
      "key": "1-snail",
      "kind": "unit",
      "label": "1 snail"
    }
  ],
  "name": "Escargot",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 2.48,
    "energy_kcal": 158.0,
    "fat_g": 6.91,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 4.36,
    "magnesium_mg": 310.0,
    "omega3_g": 0.271,
    "phosphorus_mg": 338.0,
    "potassium_mg": 474.0,
    "protein_g": 20.0,
    "salt_g": 0.7175,
    "sat_fat_g": 1.14,
    "sodium_mg": 287.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.19,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706368",
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
