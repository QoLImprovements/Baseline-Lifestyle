/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-pureed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167762",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 232.0,
      "key": "cup-pureed",
      "kind": "unit",
      "label": "cup, pureed"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "large-1-3-8-dia",
      "kind": "unit",
      "label": "large (1-3/8\" dia)"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 357.0,
      "key": "pint-as-purchased-yields",
      "kind": "unit",
      "label": "pint as purchased, yields"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "medium-1-1-4-dia",
      "kind": "unit",
      "label": "medium (1-1/4\" dia)"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "extra-large-1-5-8-dia",
      "kind": "unit",
      "label": "extra large (1-5/8\" dia)"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "small-1-dia",
      "kind": "unit",
      "label": "small (1\" dia)"
    }
  ],
  "name": "Strawberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 7.68,
    "energy_kcal": 32.0,
    "fat_g": 0.3,
    "fibre_g": 2.0,
    "folate_ug": 24.0,
    "iron_mg": 0.41,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 153.0,
    "protein_g": 0.67,
    "salt_g": 0.0025,
    "sat_fat_g": 0.015,
    "sodium_mg": 1.0,
    "sugar_g": 4.89,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 58.8,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167762",
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
