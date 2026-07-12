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
  "id": "usda-sr-legacy-168117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 253.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 31.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Cranberry juice, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 12.2,
    "energy_kcal": 46.0,
    "fat_g": 0.13,
    "fibre_g": 0.1,
    "folate_ug": 1.0,
    "iron_mg": 0.25,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 77.0,
    "protein_g": 0.39,
    "salt_g": 0.005,
    "sat_fat_g": 0.01,
    "sodium_mg": 2.0,
    "sugar_g": 12.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 9.3,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168117",
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
