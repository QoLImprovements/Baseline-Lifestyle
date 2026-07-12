/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "melon-small-about-4-1-4-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169092",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 441.0,
      "key": "melon-small-about-4-1-4-dia",
      "kind": "unit",
      "label": "melon, small (about 4-1/4\" dia)"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "wedge-large-1-8-of-large-melon",
      "kind": "unit",
      "label": "wedge, large (1/8 of large melon)"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "wedge-medium-1-8-of-medium-melon",
      "kind": "unit",
      "label": "wedge, medium (1/8 of medium melon)"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    },
    {
      "gramsPerUnit": 814.0,
      "key": "melon-large-about-6-1-2-dia",
      "kind": "unit",
      "label": "melon, large (about 6-1/2\" dia)"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 552.0,
      "key": "melon-medium-about-5-dia",
      "kind": "unit",
      "label": "melon, medium (about 5\" dia)"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "cup-balls",
      "kind": "unit",
      "label": "cup, balls"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "wedge-small-1-8-of-small-melon",
      "kind": "unit",
      "label": "wedge, small (1/8 of small melon)"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "10-cantaloupe-balls",
      "kind": "unit",
      "label": "10 cantaloupe balls"
    }
  ],
  "name": "Melons, cantaloupe, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 8.16,
    "energy_kcal": 34.0,
    "fat_g": 0.19,
    "fibre_g": 0.9,
    "folate_ug": 21.0,
    "iron_mg": 0.21,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 267.0,
    "protein_g": 0.84,
    "salt_g": 0.04,
    "sat_fat_g": 0.051,
    "sodium_mg": 16.0,
    "sugar_g": 7.86,
    "vitamin_a_ug": 169.0,
    "vitamin_c_mg": 36.7,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169092",
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
