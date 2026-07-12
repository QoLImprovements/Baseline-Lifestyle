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
  "id": "usda-sr-legacy-169107",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 31.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Papaya nectar, canned",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 14.5,
    "energy_kcal": 238.0,
    "fat_g": 0.15,
    "fibre_g": 0.6,
    "folate_ug": 2.0,
    "iron_mg": 0.34,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 31.0,
    "protein_g": 0.17,
    "salt_g": 0.0125,
    "sat_fat_g": 0.047,
    "sodium_mg": 5.0,
    "sugar_g": 13.9,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169107",
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
