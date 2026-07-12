/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-roll",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2707676",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "1-roll",
      "kind": "unit",
      "label": "1 roll"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pan Dulce, with raisins and icing",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 58.6,
    "energy_kcal": 368.0,
    "fat_g": 11.4,
    "fibre_g": 2.2,
    "folate_ug": 94.0,
    "iron_mg": 2.58,
    "magnesium_mg": 23.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 88.0,
    "potassium_mg": 127.0,
    "protein_g": 8.29,
    "salt_g": 0.535,
    "sat_fat_g": 2.14,
    "sodium_mg": 214.0,
    "sugar_g": 19.6,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707676",
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
