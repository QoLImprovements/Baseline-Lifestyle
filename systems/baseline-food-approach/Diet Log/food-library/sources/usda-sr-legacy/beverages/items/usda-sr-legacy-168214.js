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
  "id": "usda-sr-legacy-168214",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 228.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Fruit juice smoothie, NAKED JUICE, strawberry banana",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 11.7,
    "energy_kcal": 207.0,
    "fat_g": 0.27,
    "fibre_g": 0.6,
    "folate_ug": 35.0,
    "iron_mg": 0.2,
    "magnesium_mg": 14.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 18.0,
    "potassium_mg": 201.0,
    "protein_g": 0.48,
    "salt_g": 0.005,
    "sat_fat_g": 0.061,
    "sodium_mg": 2.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 8.4,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168214",
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
