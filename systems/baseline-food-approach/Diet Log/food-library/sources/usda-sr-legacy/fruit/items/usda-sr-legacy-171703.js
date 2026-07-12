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
  "id": "usda-sr-legacy-171703",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Apricots, frozen, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 25.1,
    "energy_kcal": 410.0,
    "fat_g": 0.1,
    "fibre_g": 2.2,
    "folate_ug": 2.0,
    "iron_mg": 0.9,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 229.0,
    "protein_g": 0.7,
    "salt_g": 0.01,
    "sat_fat_g": 0.007,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171703",
  "state": "Frozen",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "frozen",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
