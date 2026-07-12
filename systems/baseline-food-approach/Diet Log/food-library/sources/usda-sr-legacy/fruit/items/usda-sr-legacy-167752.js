/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-pitted",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167752",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup-pitted",
      "kind": "unit",
      "label": "cup, pitted"
    }
  ],
  "name": "Plums, dried (prunes), stewed, with added sugar",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 32.9,
    "energy_kcal": 519.0,
    "fat_g": 0.22,
    "fibre_g": 3.8,
    "folate_ug": 0.0,
    "iron_mg": 1.04,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 312.0,
    "protein_g": 1.09,
    "salt_g": 0.005,
    "sat_fat_g": 0.017,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167752",
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
