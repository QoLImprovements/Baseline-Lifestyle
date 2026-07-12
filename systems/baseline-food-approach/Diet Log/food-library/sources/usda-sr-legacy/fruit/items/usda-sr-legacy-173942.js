/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-halves",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173942",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    }
  ],
  "name": "Apricots, dried, sulfured, stewed, without added sugar",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 22.2,
    "energy_kcal": 357.0,
    "fat_g": 0.18,
    "fibre_g": 2.6,
    "folate_ug": 3.0,
    "iron_mg": 0.94,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 411.0,
    "protein_g": 1.2,
    "salt_g": 0.01,
    "sat_fat_g": 0.006,
    "sodium_mg": 4.0,
    "sugar_g": 19.6,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.53,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173942",
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
