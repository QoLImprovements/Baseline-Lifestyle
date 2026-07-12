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
  "id": "usda-fndds-2706455",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp with lobster sauce",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 2.16,
    "energy_kcal": 151.0,
    "fat_g": 7.85,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.61,
    "magnesium_mg": 25.0,
    "omega3_g": 0.371,
    "phosphorus_mg": 163.0,
    "potassium_mg": 114.0,
    "protein_g": 16.8,
    "salt_g": 2.575,
    "sat_fat_g": 1.75,
    "sodium_mg": 1030.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 1.51,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706455",
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
