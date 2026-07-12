/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fl-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169109",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.9,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Passion-fruit juice, purple, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 13.6,
    "energy_kcal": 213.0,
    "fat_g": 0.05,
    "fibre_g": 0.2,
    "folate_ug": 7.0,
    "iron_mg": 0.24,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 278.0,
    "protein_g": 0.39,
    "salt_g": 0.015,
    "sat_fat_g": 0.004,
    "sodium_mg": 6.0,
    "sugar_g": 13.4,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 29.8,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169109",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
