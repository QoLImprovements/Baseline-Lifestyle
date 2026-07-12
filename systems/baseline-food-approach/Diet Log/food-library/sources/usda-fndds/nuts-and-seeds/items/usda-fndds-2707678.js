/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2707678",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-small-croissant",
      "kind": "unit",
      "label": "1 small croissant"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "1-large-croissant",
      "kind": "unit",
      "label": "1 large croissant"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-mini-croissant",
      "kind": "unit",
      "label": "1 mini croissant"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-croissant",
      "kind": "unit",
      "label": "1 medium croissant"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-crescent-roll",
      "kind": "unit",
      "label": "1 crescent roll"
    }
  ],
  "name": "Croissant",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 45.8,
    "energy_kcal": 406.0,
    "fat_g": 21.0,
    "fibre_g": 2.6,
    "folate_ug": 88.0,
    "iron_mg": 2.03,
    "magnesium_mg": 16.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 105.0,
    "potassium_mg": 118.0,
    "protein_g": 8.2,
    "salt_g": 0.75,
    "sat_fat_g": 11.7,
    "sodium_mg": 300.0,
    "sugar_g": 11.3,
    "vitamin_a_ug": 206.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707678",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
