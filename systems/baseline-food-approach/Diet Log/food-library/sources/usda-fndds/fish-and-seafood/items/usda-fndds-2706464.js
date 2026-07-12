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
  "id": "usda-fndds-2706464",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Crabs in tomato-based sauce, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 2.92,
    "energy_kcal": 144.0,
    "fat_g": 8.9,
    "fibre_g": 0.6,
    "folate_ug": 39.0,
    "iron_mg": 0.72,
    "magnesium_mg": 30.0,
    "omega3_g": 0.119,
    "phosphorus_mg": 169.0,
    "potassium_mg": 262.0,
    "protein_g": 12.5,
    "salt_g": 1.5425,
    "sat_fat_g": 1.44,
    "sodium_mg": 617.0,
    "sugar_g": 1.16,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 3.28,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706464",
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
