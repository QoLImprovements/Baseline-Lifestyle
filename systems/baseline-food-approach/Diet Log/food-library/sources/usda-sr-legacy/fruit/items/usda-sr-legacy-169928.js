/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "small-2-1-2-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169928",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "small-2-1-2-dia",
      "kind": "unit",
      "label": "small (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "large-2-3-4-dia",
      "kind": "unit",
      "label": "large (2-3/4\" dia)"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "medium-2-2-3-dia",
      "kind": "unit",
      "label": "medium (2-2/3\" dia)"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "extra-large-3-dia",
      "kind": "unit",
      "label": "extra large (3\" dia)"
    }
  ],
  "name": "Peaches, yellow, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 9.54,
    "energy_kcal": 39.0,
    "fat_g": 0.25,
    "fibre_g": 1.5,
    "folate_ug": 4.0,
    "iron_mg": 0.25,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 190.0,
    "protein_g": 0.91,
    "salt_g": 0.0,
    "sat_fat_g": 0.019,
    "sodium_mg": 0.0,
    "sugar_g": 8.39,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 6.6,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169928",
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
