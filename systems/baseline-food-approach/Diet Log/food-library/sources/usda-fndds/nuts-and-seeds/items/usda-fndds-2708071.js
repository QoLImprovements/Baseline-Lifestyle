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
  "id": "usda-fndds-2708071",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-beignet",
      "kind": "unit",
      "label": "1 beignet"
    }
  ],
  "name": "Beignet",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 53.7,
    "energy_kcal": 417.0,
    "fat_g": 20.2,
    "fibre_g": 1.9,
    "folate_ug": 96.0,
    "iron_mg": 2.12,
    "magnesium_mg": 15.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 104.0,
    "potassium_mg": 91.0,
    "protein_g": 5.46,
    "salt_g": 0.7025,
    "sat_fat_g": 8.4,
    "sodium_mg": 281.0,
    "sugar_g": 31.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 10.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708071",
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
