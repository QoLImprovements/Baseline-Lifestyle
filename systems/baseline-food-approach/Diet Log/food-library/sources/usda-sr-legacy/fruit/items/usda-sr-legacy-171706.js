/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-without-skin-and-seed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171706",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "fruit-without-skin-and-seed",
      "kind": "unit",
      "label": "fruit, without skin and seed"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup-pureed",
      "kind": "unit",
      "label": "cup, pureed"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    }
  ],
  "name": "Avocados, raw, California",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 8.64,
    "energy_kcal": 167.0,
    "fat_g": 15.4,
    "fibre_g": 6.8,
    "folate_ug": 89.0,
    "iron_mg": 0.61,
    "magnesium_mg": 29.0,
    "omega3_g": 0.111,
    "phosphorus_mg": 54.0,
    "potassium_mg": 507.0,
    "protein_g": 1.96,
    "salt_g": 0.02,
    "sat_fat_g": 2.13,
    "sodium_mg": 8.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 8.8,
    "vitamin_e_mg": 1.97,
    "vitamin_k_ug": 21.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171706",
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
