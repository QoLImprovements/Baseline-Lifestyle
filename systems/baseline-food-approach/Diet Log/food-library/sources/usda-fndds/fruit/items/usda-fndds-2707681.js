/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2707681",
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
      "gramsPerUnit": 57.0,
      "key": "1-croissant",
      "kind": "unit",
      "label": "1 croissant"
    }
  ],
  "name": "Croissant, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 47.0,
    "energy_kcal": 396.0,
    "fat_g": 19.7,
    "fibre_g": 3.0,
    "folate_ug": 83.0,
    "iron_mg": 1.99,
    "magnesium_mg": 16.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 101.0,
    "potassium_mg": 136.0,
    "protein_g": 7.75,
    "salt_g": 0.7175,
    "sat_fat_g": 10.9,
    "sodium_mg": 287.0,
    "sugar_g": 14.1,
    "vitamin_a_ug": 193.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707681",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
