/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2708973",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 288.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Seafood paella, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 15.7,
    "energy_kcal": 146.0,
    "fat_g": 5.64,
    "fibre_g": 0.9,
    "folate_ug": 33.0,
    "iron_mg": 1.09,
    "magnesium_mg": 17.0,
    "omega3_g": 0.069,
    "phosphorus_mg": 86.0,
    "potassium_mg": 113.0,
    "protein_g": 7.59,
    "salt_g": 0.5775,
    "sat_fat_g": 0.93,
    "sodium_mg": 231.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 7.4,
    "vitamin_e_mg": 1.65,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708973",
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
