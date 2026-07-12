/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173931",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Apples, dehydrated (low moisture), sulfured, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 93.5,
    "energy_kcal": 1450.0,
    "fat_g": 0.58,
    "fibre_g": 12.4,
    "folate_ug": 1.0,
    "iron_mg": 2.0,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 640.0,
    "protein_g": 1.32,
    "salt_g": 0.31,
    "sat_fat_g": 0.095,
    "sodium_mg": 124.0,
    "sugar_g": 81.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173931",
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
