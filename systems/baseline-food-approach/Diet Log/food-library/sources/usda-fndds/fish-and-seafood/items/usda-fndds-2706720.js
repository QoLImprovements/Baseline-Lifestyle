/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706720",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Biscayne codfish, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 11.1,
    "energy_kcal": 190.0,
    "fat_g": 12.2,
    "fibre_g": 1.9,
    "folate_ug": 13.0,
    "iron_mg": 0.87,
    "magnesium_mg": 27.0,
    "omega3_g": 0.057,
    "phosphorus_mg": 107.0,
    "potassium_mg": 408.0,
    "protein_g": 9.2,
    "salt_g": 0.75,
    "sat_fat_g": 1.9,
    "sodium_mg": 300.0,
    "sugar_g": 1.85,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 11.8,
    "vitamin_e_mg": 3.02,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706720",
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
