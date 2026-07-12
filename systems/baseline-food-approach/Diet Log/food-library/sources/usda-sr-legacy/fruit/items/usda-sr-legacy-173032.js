/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "5-tbsp",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173032",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "5-tbsp",
      "kind": "unit",
      "label": "5 tbsp"
    }
  ],
  "name": "Goji berries, dried",
  "nutritionPerBasis": {
    "calcium_mg": 190.0,
    "carbs_g": 77.1,
    "energy_kcal": 1460.0,
    "fat_g": 0.39,
    "fibre_g": 13.0,
    "folate_ug": 0.0,
    "iron_mg": 6.8,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 14.3,
    "salt_g": 0.745,
    "sat_fat_g": 0.0,
    "sodium_mg": 298.0,
    "sugar_g": 45.6,
    "vitamin_a_ug": 26800.0,
    "vitamin_c_mg": 48.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173032",
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
