/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece-3-3-4-x-1-3-4-x-1-8",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172822",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "piece-3-3-4-x-1-3-4-x-1-8",
      "kind": "unit",
      "label": "piece (3-3/4\" x 1-3/4\" x 1/8\")"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "melba-round",
      "kind": "unit",
      "label": "melba round"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "toast",
      "kind": "unit",
      "label": "toast"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "cup-pieces",
      "kind": "unit",
      "label": "cup pieces"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "cup-rounds",
      "kind": "unit",
      "label": "cup, rounds"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Crackers, melba toast, plain, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 76.6,
    "energy_kcal": 1630.0,
    "fat_g": 3.2,
    "fibre_g": 6.3,
    "folate_ug": 124.0,
    "iron_mg": 3.7,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 196.0,
    "potassium_mg": 202.0,
    "protein_g": 12.1,
    "salt_g": 0.0475,
    "sat_fat_g": 0.445,
    "sodium_mg": 19.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172822",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
