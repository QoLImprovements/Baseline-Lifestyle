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
  "id": "usda-sr-legacy-173960",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 253.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cherries, sweet, canned, pitted, heavy syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 21.3,
    "energy_kcal": 347.0,
    "fat_g": 0.15,
    "fibre_g": 1.4,
    "folate_ug": 4.0,
    "iron_mg": 0.35,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 145.0,
    "protein_g": 0.6,
    "salt_g": 0.0075,
    "sat_fat_g": 0.034,
    "sodium_mg": 3.0,
    "sugar_g": 16.2,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173960",
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
