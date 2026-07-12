/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "tbsp",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173945",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.2,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Bananas, dehydrated, or banana powder",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 88.3,
    "energy_kcal": 1450.0,
    "fat_g": 1.81,
    "fibre_g": 9.9,
    "folate_ug": 14.0,
    "iron_mg": 1.15,
    "magnesium_mg": 108.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 1490.0,
    "protein_g": 3.89,
    "salt_g": 0.0075,
    "sat_fat_g": 0.698,
    "sodium_mg": 3.0,
    "sugar_g": 47.3,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173945",
  "state": "Dried",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "dried",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
