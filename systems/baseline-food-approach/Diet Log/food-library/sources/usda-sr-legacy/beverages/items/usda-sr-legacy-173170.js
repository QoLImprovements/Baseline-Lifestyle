/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "bottle",
  "description": "Beverages",
  "id": "usda-sr-legacy-173170",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 295.0,
      "key": "bottle",
      "kind": "unit",
      "label": "bottle"
    }
  ],
  "name": "Beverages, SLIMFAST, Meal replacement, High Protein Shake, Ready-To-Drink, 3-2-1 plan",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 0.85,
    "energy_kcal": 61.0,
    "fat_g": 3.38,
    "fibre_g": 0.4,
    "folate_ug": 39.0,
    "iron_mg": 0.96,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 179.0,
    "protein_g": 6.59,
    "salt_g": 0.18,
    "sat_fat_g": 0.508,
    "sodium_mg": 72.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 171.0,
    "vitamin_c_mg": 19.4,
    "vitamin_e_mg": 4.58,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173170",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
