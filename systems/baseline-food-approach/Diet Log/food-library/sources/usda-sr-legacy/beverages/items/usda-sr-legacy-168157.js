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
  "id": "usda-sr-legacy-168157",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 30.8,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Lime juice, canned or bottled, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 6.69,
    "energy_kcal": 21.0,
    "fat_g": 0.23,
    "fibre_g": 0.4,
    "folate_ug": 8.0,
    "iron_mg": 0.23,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 75.0,
    "protein_g": 0.25,
    "salt_g": 0.04,
    "sat_fat_g": 0.026,
    "sodium_mg": 16.0,
    "sugar_g": 1.37,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168157",
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
