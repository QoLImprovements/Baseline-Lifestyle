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
  "id": "usda-fndds-2706566",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-stuffed-shrimp",
      "kind": "unit",
      "label": "1 stuffed shrimp"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp with crab stuffing",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 6.16,
    "energy_kcal": 174.0,
    "fat_g": 9.01,
    "fibre_g": 0.3,
    "folate_ug": 47.0,
    "iron_mg": 0.9,
    "magnesium_mg": 30.0,
    "omega3_g": 0.144,
    "phosphorus_mg": 244.0,
    "potassium_mg": 199.0,
    "protein_g": 16.4,
    "salt_g": 1.3425,
    "sat_fat_g": 2.19,
    "sodium_mg": 537.0,
    "sugar_g": 0.33,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706566",
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
