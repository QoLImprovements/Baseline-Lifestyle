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
  "id": "usda-sr-legacy-167751",
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
  "name": "Plums, dried (prunes), stewed, without added sugar",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 28.1,
    "energy_kcal": 448.0,
    "fat_g": 0.16,
    "fibre_g": 3.1,
    "folate_ug": 0.0,
    "iron_mg": 0.41,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 321.0,
    "protein_g": 0.96,
    "salt_g": 0.0025,
    "sat_fat_g": 0.01,
    "sodium_mg": 1.0,
    "sugar_g": 25.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 26.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167751",
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
