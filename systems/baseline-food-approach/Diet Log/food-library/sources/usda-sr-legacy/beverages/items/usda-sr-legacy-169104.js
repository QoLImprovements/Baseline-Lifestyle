/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169104",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 30.9,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Orange-grapefruit juice, canned or bottled, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 10.3,
    "energy_kcal": 180.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 14.0,
    "iron_mg": 0.46,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 158.0,
    "protein_g": 0.6,
    "salt_g": 0.0075,
    "sat_fat_g": 0.011,
    "sodium_mg": 3.0,
    "sugar_g": 10.2,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 29.1,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169104",
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
