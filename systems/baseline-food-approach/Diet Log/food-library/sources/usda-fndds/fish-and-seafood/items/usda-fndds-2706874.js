/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706874",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 402.0,
      "key": "quantity-not-specified-if-main-course-in-meal",
      "kind": "unit",
      "label": "Quantity not specified, if main course in meal"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified-if-appetizer",
      "kind": "unit",
      "label": "Quantity not specified, if appetizer"
    }
  ],
  "name": "Antipasto with ham, fish, cheese, vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 3.75,
    "energy_kcal": 158.0,
    "fat_g": 10.7,
    "fibre_g": 1.1,
    "folate_ug": 11.0,
    "iron_mg": 0.8,
    "magnesium_mg": 21.0,
    "omega3_g": 0.217,
    "phosphorus_mg": 180.0,
    "potassium_mg": 248.0,
    "protein_g": 11.6,
    "salt_g": 2.135,
    "sat_fat_g": 4.63,
    "sodium_mg": 854.0,
    "sugar_g": 1.51,
    "vitamin_a_ug": 288.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 9.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706874",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "fish-and-seafood",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
