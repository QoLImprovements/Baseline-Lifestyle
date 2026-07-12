/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "3-fruit-without-pits",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167788",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.1,
      "key": "3-fruit-without-pits",
      "kind": "unit",
      "label": "3 fruit without pits"
    }
  ],
  "name": "Nance, canned, syrup, drained",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 22.8,
    "energy_kcal": 396.0,
    "fat_g": 1.28,
    "fibre_g": 7.0,
    "folate_ug": 0.0,
    "iron_mg": 0.37,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 194.0,
    "protein_g": 0.56,
    "salt_g": 0.02,
    "sat_fat_g": 0.0,
    "sodium_mg": 8.0,
    "sugar_g": 15.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167788",
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
