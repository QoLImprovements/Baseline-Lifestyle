/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "eclair-frozen",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167922",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "eclair-frozen",
      "kind": "unit",
      "label": "eclair, frozen"
    }
  ],
  "name": "Heinz, Weight Watcher, Chocolate Eclair, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 40.3,
    "energy_kcal": 241.0,
    "fat_g": 6.9,
    "fibre_g": 2.1,
    "folate_ug": 0.0,
    "iron_mg": 0.7,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 4.4,
    "salt_g": 0.75,
    "sat_fat_g": 1.4,
    "sodium_mg": 300.0,
    "sugar_g": 16.8,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167922",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
