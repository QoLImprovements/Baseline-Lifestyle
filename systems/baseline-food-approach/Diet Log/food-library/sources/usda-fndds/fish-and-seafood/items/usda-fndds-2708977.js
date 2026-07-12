/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2708977",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice with squid, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 29.3,
    "energy_kcal": 264.0,
    "fat_g": 11.8,
    "fibre_g": 0.8,
    "folate_ug": 54.0,
    "iron_mg": 1.81,
    "magnesium_mg": 25.0,
    "omega3_g": 0.197,
    "phosphorus_mg": 128.0,
    "potassium_mg": 198.0,
    "protein_g": 8.87,
    "salt_g": 1.3975,
    "sat_fat_g": 1.9,
    "sodium_mg": 559.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 22.7,
    "vitamin_e_mg": 3.14,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708977",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "fish-and-seafood",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
