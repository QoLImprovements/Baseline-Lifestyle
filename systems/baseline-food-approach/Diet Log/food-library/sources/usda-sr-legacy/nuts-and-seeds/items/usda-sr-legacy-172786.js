/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "piece-1-8-of-9-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172786",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "piece (1/8 of 9\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pie, pecan, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 52.2,
    "energy_kcal": 1720.0,
    "fat_g": 22.2,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 1.48,
    "magnesium_mg": 26.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 94.0,
    "potassium_mg": 133.0,
    "protein_g": 4.9,
    "salt_g": 0.655,
    "sat_fat_g": 3.99,
    "sodium_mg": 262.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172786",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
