/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708068",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-doughnut",
      "kind": "unit",
      "label": "1 doughnut"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-stick-twist",
      "kind": "unit",
      "label": "1 stick/twist"
    }
  ],
  "name": "Doughnut, chocolate, with chocolate icing",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 51.0,
    "energy_kcal": 413.0,
    "fat_g": 22.7,
    "fibre_g": 3.9,
    "folate_ug": 70.0,
    "iron_mg": 3.06,
    "magnesium_mg": 50.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 255.0,
    "potassium_mg": 239.0,
    "protein_g": 5.42,
    "salt_g": 0.97,
    "sat_fat_g": 9.79,
    "sodium_mg": 388.0,
    "sugar_g": 25.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.78,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708068",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
