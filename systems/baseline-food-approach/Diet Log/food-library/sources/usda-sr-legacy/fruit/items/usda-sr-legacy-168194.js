/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "slice-4-2-3-dia-x-3-4-thick",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168194",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "slice-4-2-3-dia-x-3-4-thick",
      "kind": "unit",
      "label": "slice (4-2/3\" dia x 3/4\" thick)"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-chunks",
      "kind": "unit",
      "label": "cup, chunks"
    },
    {
      "gramsPerUnit": 905.0,
      "key": "fruit",
      "kind": "unit",
      "label": "fruit"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    }
  ],
  "name": "Pineapple, raw, extra sweet variety",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 13.5,
    "energy_kcal": 215.0,
    "fat_g": 0.11,
    "fibre_g": 1.4,
    "folate_ug": 19.0,
    "iron_mg": 0.28,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 108.0,
    "protein_g": 0.53,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 56.4,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168194",
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
