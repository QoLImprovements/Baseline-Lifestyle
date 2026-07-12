/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-halves-or-slices",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169113",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "cup-halves-or-slices",
      "kind": "unit",
      "label": "cup, halves or slices"
    }
  ],
  "name": "Peaches, canned, extra heavy syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 26.1,
    "energy_kcal": 402.0,
    "fat_g": 0.03,
    "fibre_g": 1.0,
    "folate_ug": 3.0,
    "iron_mg": 0.29,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 83.0,
    "protein_g": 0.47,
    "salt_g": 0.02,
    "sat_fat_g": 0.003,
    "sodium_mg": 8.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169113",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "canned",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
