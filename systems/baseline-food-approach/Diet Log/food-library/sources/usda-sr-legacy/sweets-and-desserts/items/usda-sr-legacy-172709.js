/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-12-of-9-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172709",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "piece-1-12-of-9-dia",
      "kind": "unit",
      "label": "piece (1/12 of 9\" dia)"
    },
    {
      "gramsPerUnit": 887.0,
      "key": "cake-2-layer-8-or-9-dia",
      "kind": "unit",
      "label": "cake, 2-layer (8\" or 9\" dia)"
    }
  ],
  "name": "Cake, white, prepared from recipe without frosting",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 57.2,
    "energy_kcal": 1490.0,
    "fat_g": 12.4,
    "fibre_g": 0.8,
    "folate_ug": 38.0,
    "iron_mg": 1.52,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 95.0,
    "protein_g": 5.4,
    "salt_g": 0.8175,
    "sat_fat_g": 3.27,
    "sodium_mg": 327.0,
    "sugar_g": 35.5,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172709",
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
