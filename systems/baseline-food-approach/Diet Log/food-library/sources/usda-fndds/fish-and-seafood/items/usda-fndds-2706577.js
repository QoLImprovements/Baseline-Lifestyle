/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706577",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shellfish and noodles with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 15.7,
    "energy_kcal": 135.0,
    "fat_g": 5.04,
    "fibre_g": 1.1,
    "folate_ug": 50.0,
    "iron_mg": 1.34,
    "magnesium_mg": 22.0,
    "omega3_g": 0.038,
    "phosphorus_mg": 100.0,
    "potassium_mg": 179.0,
    "protein_g": 6.58,
    "salt_g": 0.5975,
    "sat_fat_g": 0.782,
    "sodium_mg": 239.0,
    "sugar_g": 1.36,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706577",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
