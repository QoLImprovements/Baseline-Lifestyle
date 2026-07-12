/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-2-7-8-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168175",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "fruit-2-7-8-dia",
      "kind": "unit",
      "label": "fruit (2-7/8\" dia)"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup-pulp",
      "kind": "unit",
      "label": "cup, pulp"
    }
  ],
  "name": "Sugar-apples, (sweetsop), raw",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 23.6,
    "energy_kcal": 393.0,
    "fat_g": 0.29,
    "fibre_g": 4.4,
    "folate_ug": 14.0,
    "iron_mg": 0.6,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 247.0,
    "protein_g": 2.06,
    "salt_g": 0.0225,
    "sat_fat_g": 0.048,
    "sodium_mg": 9.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 36.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168175",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
