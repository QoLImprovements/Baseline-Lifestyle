/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-stick-twist",
      "kind": "unit",
      "label": "1 stick/twist"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-doughnut",
      "kind": "unit",
      "label": "1 doughnut"
    }
  ],
  "name": "Doughnut, custard-filled, with icing",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 46.2,
    "energy_kcal": 368.0,
    "fat_g": 18.7,
    "fibre_g": 1.6,
    "folate_ug": 72.0,
    "iron_mg": 1.84,
    "magnesium_mg": 16.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 98.0,
    "potassium_mg": 112.0,
    "protein_g": 4.52,
    "salt_g": 0.675,
    "sat_fat_g": 7.39,
    "sodium_mg": 270.0,
    "sugar_g": 27.6,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708076",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
