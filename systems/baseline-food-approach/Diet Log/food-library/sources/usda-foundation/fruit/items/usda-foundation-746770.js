/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "medium-1-8-of-medium-melon",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-746770",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "medium-1-8-of-medium-melon",
      "kind": "unit",
      "label": "medium (1/8 of medium melon)"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "large-1-8-of-large-melon",
      "kind": "unit",
      "label": "large (1/8 of large melon)"
    },
    {
      "gramsPerUnit": 441.0,
      "key": "small-about-4-1-4-dia",
      "kind": "unit",
      "label": "small (about 4-1/4\" dia)"
    },
    {
      "gramsPerUnit": 814.0,
      "key": "large-about-6-1-2-dia",
      "kind": "unit",
      "label": "large (about 6-1/2\" dia)"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cubes",
      "kind": "unit",
      "label": "cubes"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "10-balls",
      "kind": "unit",
      "label": "10 balls"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "diced",
      "kind": "unit",
      "label": "diced"
    },
    {
      "gramsPerUnit": 552.0,
      "key": "medium-about-5-dia",
      "kind": "unit",
      "label": "medium (about 5\" dia)"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "small-1-8-of-small-melon",
      "kind": "unit",
      "label": "small (1/8 of small melon)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Melons, cantaloupe, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 8.16,
    "energy_kcal": 34.0,
    "fat_g": 0.18,
    "fibre_g": 0.8,
    "folate_ug": 14.0,
    "iron_mg": 0.38,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 157.0,
    "protein_g": 0.82,
    "salt_g": 0.075,
    "sat_fat_g": 0.0,
    "sodium_mg": 30.0,
    "sugar_g": 7.88,
    "vitamin_a_ug": 232.0,
    "vitamin_c_mg": 10.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746770",
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
