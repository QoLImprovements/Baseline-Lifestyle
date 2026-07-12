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
  "id": "usda-sr-legacy-167771",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Apple juice, canned or bottled, unsweetened, with added ascorbic acid",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 11.3,
    "energy_kcal": 191.0,
    "fat_g": 0.13,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 0.12,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 101.0,
    "protein_g": 0.1,
    "salt_g": 0.01,
    "sat_fat_g": 0.022,
    "sodium_mg": 4.0,
    "sugar_g": 9.62,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 38.5,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167771",
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
