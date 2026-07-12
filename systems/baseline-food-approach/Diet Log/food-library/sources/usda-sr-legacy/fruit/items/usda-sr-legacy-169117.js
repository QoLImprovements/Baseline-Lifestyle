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
  "id": "usda-sr-legacy-169117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peach nectar, canned, with sucralose, without added ascorbic acid",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 11.6,
    "energy_kcal": 206.0,
    "fat_g": 0.57,
    "fibre_g": 0.1,
    "folate_ug": 1.0,
    "iron_mg": 0.07,
    "magnesium_mg": 4.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 3.0,
    "potassium_mg": 30.0,
    "protein_g": 0.1,
    "salt_g": 0.0275,
    "sat_fat_g": 0.037,
    "sodium_mg": 11.0,
    "sugar_g": 12.1,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169117",
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
