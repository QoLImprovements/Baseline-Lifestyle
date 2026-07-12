/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-piece-with-broth",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706551",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-piece-with-broth",
      "kind": "unit",
      "label": "1 piece with broth"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "5-balls",
      "kind": "unit",
      "label": "5 balls"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Gefilte fish",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 8.74,
    "energy_kcal": 82.0,
    "fat_g": 0.41,
    "fibre_g": 0.4,
    "folate_ug": 21.0,
    "iron_mg": 0.68,
    "magnesium_mg": 16.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 183.0,
    "potassium_mg": 171.0,
    "protein_g": 10.4,
    "salt_g": 1.1325,
    "sat_fat_g": 0.07,
    "sodium_mg": 453.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706551",
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
