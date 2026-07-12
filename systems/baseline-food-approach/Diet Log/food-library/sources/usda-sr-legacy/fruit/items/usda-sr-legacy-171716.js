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
  "id": "usda-sr-legacy-171716",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cherries, sour, red, canned, heavy syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 23.3,
    "energy_kcal": 381.0,
    "fat_g": 0.1,
    "fibre_g": 1.1,
    "folate_ug": 8.0,
    "iron_mg": 1.3,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 93.0,
    "protein_g": 0.73,
    "salt_g": 0.0175,
    "sat_fat_g": 0.021,
    "sodium_mg": 7.0,
    "sugar_g": 22.2,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171716",
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
