/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "large-3-1-4-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171689",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "large-3-1-4-dia",
      "kind": "unit",
      "label": "large (3-1/4\" dia)"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "small-2-3-4-dia",
      "kind": "unit",
      "label": "small (2-3/4\" dia)"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "medium-3-dia",
      "kind": "unit",
      "label": "medium (3\" dia)"
    }
  ],
  "name": "Apples, raw, without skin",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 12.8,
    "energy_kcal": 200.0,
    "fat_g": 0.13,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 0.07,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 90.0,
    "protein_g": 0.27,
    "salt_g": 0.0,
    "sat_fat_g": 0.021,
    "sodium_mg": 0.0,
    "sugar_g": 10.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171689",
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
