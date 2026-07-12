/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168181",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 222.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "half",
      "kind": "unit",
      "label": "half"
    },
    {
      "gramsPerUnit": 12.7,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Peaches, canned, heavy syrup, drained",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 18.4,
    "energy_kcal": 72.0,
    "fat_g": 0.18,
    "fibre_g": 1.2,
    "folate_ug": 9.0,
    "iron_mg": 0.27,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 94.0,
    "protein_g": 0.52,
    "salt_g": 0.015,
    "sat_fat_g": 0.013,
    "sodium_mg": 6.0,
    "sugar_g": 14.7,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168181",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "canned",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
