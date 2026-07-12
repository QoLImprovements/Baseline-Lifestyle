/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "drink-box-8-45-fl-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169099",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 263.0,
      "key": "drink-box-8-45-fl-oz",
      "kind": "unit",
      "label": "drink box (8.45 fl oz)"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 31.1,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Orange juice, canned, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 11.0,
    "energy_kcal": 196.0,
    "fat_g": 0.15,
    "fibre_g": 0.3,
    "folate_ug": 24.0,
    "iron_mg": 0.1,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 184.0,
    "protein_g": 0.68,
    "salt_g": 0.01,
    "sat_fat_g": 0.018,
    "sodium_mg": 4.0,
    "sugar_g": 8.76,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 30.1,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169099",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "canned",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
