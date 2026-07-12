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
  "id": "usda-fndds-2706554",
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
  "name": "Shrimp and noodles with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 14.7,
    "energy_kcal": 131.0,
    "fat_g": 5.18,
    "fibre_g": 0.6,
    "folate_ug": 47.0,
    "iron_mg": 0.83,
    "magnesium_mg": 17.0,
    "omega3_g": 0.045,
    "phosphorus_mg": 92.0,
    "potassium_mg": 58.0,
    "protein_g": 6.02,
    "salt_g": 0.445,
    "sat_fat_g": 0.899,
    "sodium_mg": 178.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706554",
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
