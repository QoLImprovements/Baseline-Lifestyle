/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168193",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1002.0,
      "key": "fruit",
      "kind": "unit",
      "label": "fruit"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "slice-4-2-3-dia-x-3-4-thick",
      "kind": "unit",
      "label": "slice (4-2/3\" dia x 3/4\" thick)"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-chunks",
      "kind": "unit",
      "label": "cup, chunks"
    }
  ],
  "name": "Pineapple, raw, traditional varieties",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 11.8,
    "energy_kcal": 45.0,
    "fat_g": 0.13,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.25,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 125.0,
    "protein_g": 0.55,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 8.29,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 16.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168193",
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
