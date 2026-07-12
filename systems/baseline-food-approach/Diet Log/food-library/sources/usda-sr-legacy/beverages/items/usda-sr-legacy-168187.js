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
  "id": "usda-sr-legacy-168187",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.3,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pineapple juice, canned or bottled, unsweetened, with added ascorbic acid",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 12.9,
    "energy_kcal": 53.0,
    "fat_g": 0.12,
    "fibre_g": 0.2,
    "folate_ug": 18.0,
    "iron_mg": 0.31,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 130.0,
    "protein_g": 0.36,
    "salt_g": 0.005,
    "sat_fat_g": 0.008,
    "sodium_mg": 2.0,
    "sugar_g": 9.98,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 43.8,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168187",
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
