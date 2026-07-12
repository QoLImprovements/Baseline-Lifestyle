/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "medium-2-1-4-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173021",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "medium-2-1-4-dia",
      "kind": "unit",
      "label": "medium (2-1/4\" dia)"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "large-2-1-2-dia",
      "kind": "unit",
      "label": "large (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "small-1-1-2-dia",
      "kind": "unit",
      "label": "small (1-1/2\" dia)"
    }
  ],
  "name": "Figs, raw",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 19.2,
    "energy_kcal": 74.0,
    "fat_g": 0.3,
    "fibre_g": 2.9,
    "folate_ug": 6.0,
    "iron_mg": 0.37,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 232.0,
    "protein_g": 0.75,
    "salt_g": 0.0025,
    "sat_fat_g": 0.06,
    "sodium_mg": 1.0,
    "sugar_g": 16.3,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173021",
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
