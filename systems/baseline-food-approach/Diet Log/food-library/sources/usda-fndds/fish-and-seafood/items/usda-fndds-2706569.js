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
  "id": "usda-fndds-2706569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Seafood souffle",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 5.56,
    "energy_kcal": 153.0,
    "fat_g": 9.98,
    "fibre_g": 0.1,
    "folate_ug": 25.0,
    "iron_mg": 1.01,
    "magnesium_mg": 16.0,
    "omega3_g": 0.087,
    "phosphorus_mg": 143.0,
    "potassium_mg": 149.0,
    "protein_g": 9.94,
    "salt_g": 1.0625,
    "sat_fat_g": 4.83,
    "sodium_mg": 425.0,
    "sugar_g": 2.21,
    "vitamin_a_ug": 130.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706569",
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
