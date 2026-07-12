/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-strip-or-stick-4-long",
  "description": "Cold cuts and cured meats",
  "id": "usda-fndds-2705915",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-strip-or-stick-4-long",
      "kind": "unit",
      "label": "1 strip or stick (4\" long)"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Venison/deer jerky",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 14.7,
    "energy_kcal": 398.0,
    "fat_g": 22.4,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 4.32,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 253.0,
    "potassium_mg": 391.0,
    "protein_g": 32.2,
    "salt_g": 7.4,
    "sat_fat_g": 9.6,
    "sodium_mg": 2960.0,
    "sugar_g": 14.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705915",
  "state": "Unspecified",
  "subcategory": "Cold cuts and cured meats",
  "tags": [
    "cold-cuts-and-cured-meats",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
