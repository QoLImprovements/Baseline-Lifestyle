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
  "id": "usda-sr-legacy-169101",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
  "name": "Orange juice, chilled, includes from concentrate, with added calcium and vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 11.3,
    "energy_kcal": 47.0,
    "fat_g": 0.12,
    "fibre_g": 0.3,
    "folate_ug": 19.0,
    "iron_mg": 0.13,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 178.0,
    "protein_g": 0.68,
    "salt_g": 0.005,
    "sat_fat_g": 0.014,
    "sodium_mg": 2.0,
    "sugar_g": 8.31,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 33.6,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169101",
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
