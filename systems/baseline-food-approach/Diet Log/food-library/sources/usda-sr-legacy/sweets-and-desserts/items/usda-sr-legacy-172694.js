/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-12-of-12-oz-cake",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172694",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "piece-1-12-of-12-oz-cake",
      "kind": "unit",
      "label": "piece (1/12 of 12 oz cake)"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "cake-9-dia-x-4",
      "kind": "unit",
      "label": "cake (9\" dia x 4\")"
    }
  ],
  "name": "Cake, angelfood, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 57.8,
    "energy_kcal": 258.0,
    "fat_g": 0.8,
    "fibre_g": 1.5,
    "folate_ug": 35.0,
    "iron_mg": 0.52,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 324.0,
    "potassium_mg": 93.0,
    "protein_g": 5.9,
    "salt_g": 1.8725,
    "sat_fat_g": 0.121,
    "sodium_mg": 749.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172694",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
