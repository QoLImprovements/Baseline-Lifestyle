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
  "id": "usda-sr-legacy-167756",
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
  "name": "Raspberries, canned, red, heavy syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 23.4,
    "energy_kcal": 381.0,
    "fat_g": 0.12,
    "fibre_g": 3.3,
    "folate_ug": 11.0,
    "iron_mg": 0.42,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 94.0,
    "protein_g": 0.83,
    "salt_g": 0.0075,
    "sat_fat_g": 0.005,
    "sodium_mg": 3.0,
    "sugar_g": 20.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167756",
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
