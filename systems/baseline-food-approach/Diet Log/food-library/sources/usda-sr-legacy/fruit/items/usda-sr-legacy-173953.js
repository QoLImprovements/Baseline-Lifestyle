/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-pieces",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173953",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup-pieces",
      "kind": "unit",
      "label": "cup, pieces"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "fruit-without-skin-and-seeds",
      "kind": "unit",
      "label": "fruit without skin and seeds"
    }
  ],
  "name": "Cherimoya, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 17.7,
    "energy_kcal": 313.0,
    "fat_g": 0.68,
    "fibre_g": 3.0,
    "folate_ug": 23.0,
    "iron_mg": 0.27,
    "magnesium_mg": 17.0,
    "omega3_g": 0.159,
    "phosphorus_mg": 26.0,
    "potassium_mg": 287.0,
    "protein_g": 1.57,
    "salt_g": 0.0175,
    "sat_fat_g": 0.233,
    "sodium_mg": 7.0,
    "sugar_g": 12.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.6,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173953",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
