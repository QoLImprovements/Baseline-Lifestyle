/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "slice-thin-3-1-2-dia-x-1-2-thick",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169124",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "slice-thin-3-1-2-dia-x-1-2-thick",
      "kind": "unit",
      "label": "slice, thin (3-1/2\" dia x 1/2\" thick)"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "slice-4-2-3-dia-x-3-4-thick",
      "kind": "unit",
      "label": "slice (4-2/3\" dia x 3/4\" thick)"
    },
    {
      "gramsPerUnit": 905.0,
      "key": "fruit",
      "kind": "unit",
      "label": "fruit"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-chunks",
      "kind": "unit",
      "label": "cup, chunks"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "slice-3-1-2-dia-x-3-4-thick",
      "kind": "unit",
      "label": "slice (3-1/2\" dia x 3/4\" thick)"
    }
  ],
  "name": "Pineapple, raw, all varieties",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 13.1,
    "energy_kcal": 209.0,
    "fat_g": 0.12,
    "fibre_g": 1.4,
    "folate_ug": 18.0,
    "iron_mg": 0.29,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 109.0,
    "protein_g": 0.54,
    "salt_g": 0.0025,
    "sat_fat_g": 0.009,
    "sodium_mg": 1.0,
    "sugar_g": 9.85,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 47.8,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169124",
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
