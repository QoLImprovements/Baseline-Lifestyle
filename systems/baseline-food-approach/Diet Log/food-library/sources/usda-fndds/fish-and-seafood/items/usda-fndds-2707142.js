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
  "id": "usda-fndds-2707142",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp gumbo",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 4.63,
    "energy_kcal": 61.0,
    "fat_g": 1.89,
    "fibre_g": 0.9,
    "folate_ug": 21.0,
    "iron_mg": 1.1,
    "magnesium_mg": 20.0,
    "omega3_g": 0.246,
    "phosphorus_mg": 73.0,
    "potassium_mg": 194.0,
    "protein_g": 6.52,
    "salt_g": 0.9425,
    "sat_fat_g": 0.782,
    "sodium_mg": 377.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 8.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707142",
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
