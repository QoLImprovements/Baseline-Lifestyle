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
  "id": "usda-sr-legacy-167794",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.1,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Orange juice, chilled, includes from concentrate, with added calcium and vitamins A, D, E",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 11.5,
    "energy_kcal": 49.0,
    "fat_g": 0.12,
    "fibre_g": 0.3,
    "folate_ug": 19.0,
    "iron_mg": 0.13,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 178.0,
    "protein_g": 0.68,
    "salt_g": 0.005,
    "sat_fat_g": 0.014,
    "sodium_mg": 2.0,
    "sugar_g": 8.31,
    "vitamin_a_ug": 114.0,
    "vitamin_c_mg": 33.6,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167794",
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
