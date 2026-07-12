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
  "id": "usda-fndds-2708075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-doughnut",
      "kind": "unit",
      "label": "1 doughnut"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-stick-twist",
      "kind": "unit",
      "label": "1 stick/twist"
    }
  ],
  "name": "Doughnut, custard-filled",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 42.9,
    "energy_kcal": 363.0,
    "fat_g": 18.9,
    "fibre_g": 1.7,
    "folate_ug": 87.0,
    "iron_mg": 1.92,
    "magnesium_mg": 14.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 102.0,
    "potassium_mg": 95.0,
    "protein_g": 5.2,
    "salt_g": 0.7175,
    "sat_fat_g": 7.77,
    "sodium_mg": 287.0,
    "sugar_g": 21.6,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 9.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708075",
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
