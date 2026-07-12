/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "medium-2-1-2-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169914",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "medium-2-1-2-dia",
      "kind": "unit",
      "label": "medium (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "large-2-3-4-dia",
      "kind": "unit",
      "label": "large (2-3/4\" dia)"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "small-2-1-3-dia",
      "kind": "unit",
      "label": "small (2-1/3\" dia)"
    }
  ],
  "name": "Nectarines, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 10.6,
    "energy_kcal": 185.0,
    "fat_g": 0.32,
    "fibre_g": 1.7,
    "folate_ug": 5.0,
    "iron_mg": 0.28,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 201.0,
    "protein_g": 1.06,
    "salt_g": 0.0,
    "sat_fat_g": 0.025,
    "sodium_mg": 0.0,
    "sugar_g": 7.89,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169914",
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
