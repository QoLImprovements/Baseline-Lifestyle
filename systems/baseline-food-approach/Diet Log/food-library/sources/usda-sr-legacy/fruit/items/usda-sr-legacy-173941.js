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
  "id": "usda-sr-legacy-173941",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    },
    {
      "gramsPerUnit": 3.5,
      "key": "half",
      "kind": "unit",
      "label": "half"
    }
  ],
  "name": "Apricots, dried, sulfured, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 62.6,
    "energy_kcal": 241.0,
    "fat_g": 0.51,
    "fibre_g": 7.3,
    "folate_ug": 10.0,
    "iron_mg": 2.66,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 1160.0,
    "protein_g": 3.39,
    "salt_g": 0.025,
    "sat_fat_g": 0.017,
    "sodium_mg": 10.0,
    "sugar_g": 53.4,
    "vitamin_a_ug": 180.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 4.33,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173941",
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
