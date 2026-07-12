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
  "id": "usda-fndds-2706837",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Shrimp salad",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 1.27,
    "energy_kcal": 196.0,
    "fat_g": 16.2,
    "fibre_g": 0.4,
    "folate_ug": 15.0,
    "iron_mg": 1.13,
    "magnesium_mg": 20.0,
    "omega3_g": 0.304,
    "phosphorus_mg": 109.0,
    "potassium_mg": 110.0,
    "protein_g": 10.7,
    "salt_g": 1.7575,
    "sat_fat_g": 2.52,
    "sodium_mg": 703.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 40.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706837",
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
