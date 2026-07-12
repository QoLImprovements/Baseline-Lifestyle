/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fl-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169940",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pear nectar, canned, without added ascorbic acid",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 15.8,
    "energy_kcal": 251.0,
    "fat_g": 0.01,
    "fibre_g": 0.6,
    "folate_ug": 1.0,
    "iron_mg": 0.26,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 13.0,
    "protein_g": 0.11,
    "salt_g": 0.01,
    "sat_fat_g": 0.001,
    "sodium_mg": 4.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169940",
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
