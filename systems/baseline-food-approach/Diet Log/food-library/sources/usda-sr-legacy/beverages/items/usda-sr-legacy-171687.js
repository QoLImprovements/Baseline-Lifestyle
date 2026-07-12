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
  "id": "usda-sr-legacy-171687",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Acerola juice, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.8,
    "energy_kcal": 96.0,
    "fat_g": 0.3,
    "fibre_g": 0.3,
    "folate_ug": 14.0,
    "iron_mg": 0.5,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 97.0,
    "protein_g": 0.4,
    "salt_g": 0.0075,
    "sat_fat_g": 0.068,
    "sodium_mg": 3.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 1600.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171687",
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
