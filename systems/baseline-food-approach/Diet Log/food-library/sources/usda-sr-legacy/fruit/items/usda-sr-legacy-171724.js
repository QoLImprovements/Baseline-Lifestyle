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
  "id": "usda-sr-legacy-171724",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Currants, zante, dried",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 77.0,
    "energy_kcal": 1220.0,
    "fat_g": 0.22,
    "fibre_g": 4.4,
    "folate_ug": 10.0,
    "iron_mg": 1.88,
    "magnesium_mg": 36.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 99.0,
    "potassium_mg": 777.0,
    "protein_g": 3.43,
    "salt_g": 0.1075,
    "sat_fat_g": 0.085,
    "sodium_mg": 43.0,
    "sugar_g": 62.3,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171724",
  "state": "Dried",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "dried",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
