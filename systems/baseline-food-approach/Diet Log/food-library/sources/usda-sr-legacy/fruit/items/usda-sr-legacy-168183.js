/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-with-pits-yields",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168183",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "cup-with-pits-yields",
      "kind": "unit",
      "label": "cup, with pits, yields"
    }
  ],
  "name": "Plums, canned, heavy syrup, drained",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 23.1,
    "energy_kcal": 374.0,
    "fat_g": 0.14,
    "fibre_g": 1.5,
    "folate_ug": 3.0,
    "iron_mg": 0.84,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 93.0,
    "protein_g": 0.44,
    "salt_g": 0.0475,
    "sat_fat_g": 0.011,
    "sodium_mg": 19.0,
    "sugar_g": 21.6,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168183",
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
