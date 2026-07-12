/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "8-fl-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168198",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    }
  ],
  "name": "Juice, apple, grape and pear blend, with added ascorbic acid and calcium",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 13.0,
    "energy_kcal": 219.0,
    "fat_g": 0.12,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 0.14,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 89.0,
    "protein_g": 0.17,
    "salt_g": 0.0125,
    "sat_fat_g": 0.021,
    "sodium_mg": 5.0,
    "sugar_g": 9.95,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 50.7,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168198",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
