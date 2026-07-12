/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-oyster",
  "description": "Shellfish",
  "id": "usda-fndds-2706353",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-oyster",
      "kind": "unit",
      "label": "1 oyster"
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
  "name": "Oysters, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 3.44,
    "energy_kcal": 65.0,
    "fat_g": 2.16,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 5.84,
    "magnesium_mg": 23.0,
    "omega3_g": 0.409,
    "phosphorus_mg": 123.0,
    "potassium_mg": 197.0,
    "protein_g": 7.23,
    "salt_g": 0.27,
    "sat_fat_g": 0.6,
    "sodium_mg": 108.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706353",
  "state": "Steamed",
  "subcategory": "Shellfish",
  "tags": [
    "fish-and-seafood",
    "shellfish",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
