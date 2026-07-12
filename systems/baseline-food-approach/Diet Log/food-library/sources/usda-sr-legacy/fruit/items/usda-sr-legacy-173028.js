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
  "id": "usda-sr-legacy-173028",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, heavy syrup, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 18.9,
    "energy_kcal": 305.0,
    "fat_g": 0.07,
    "fibre_g": 1.0,
    "folate_ug": 3.0,
    "iron_mg": 0.29,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 88.0,
    "protein_g": 0.39,
    "salt_g": 0.015,
    "sat_fat_g": 0.01,
    "sodium_mg": 6.0,
    "sugar_g": 17.9,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173028",
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
