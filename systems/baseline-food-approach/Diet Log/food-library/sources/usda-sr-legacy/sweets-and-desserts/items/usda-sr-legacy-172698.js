/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172698",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "piece-1-12-of-9-dia",
      "kind": "unit",
      "label": "piece (1/12 of 9\" dia)"
    }
  ],
  "name": "Cake, white, prepared from recipe with coconut frosting",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 63.2,
    "energy_kcal": 1490.0,
    "fat_g": 10.3,
    "fibre_g": 1.0,
    "folate_ug": 31.0,
    "iron_mg": 1.16,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 99.0,
    "protein_g": 4.4,
    "salt_g": 0.71,
    "sat_fat_g": 3.9,
    "sodium_mg": 284.0,
    "sugar_g": 57.4,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172698",
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
