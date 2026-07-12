/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-regular",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708070",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Churros",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 48.9,
    "energy_kcal": 419.0,
    "fat_g": 22.2,
    "fibre_g": 2.6,
    "folate_ug": 106.0,
    "iron_mg": 2.42,
    "magnesium_mg": 17.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 115.0,
    "potassium_mg": 105.0,
    "protein_g": 6.05,
    "salt_g": 0.7725,
    "sat_fat_g": 9.25,
    "sodium_mg": 309.0,
    "sugar_g": 23.4,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708070",
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
