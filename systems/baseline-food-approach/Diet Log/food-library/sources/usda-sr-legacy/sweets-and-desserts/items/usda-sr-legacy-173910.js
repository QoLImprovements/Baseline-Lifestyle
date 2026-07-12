/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-biscuits-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173910",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "2-biscuits-1-nlea-serving",
      "kind": "unit",
      "label": "2 biscuits (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST, Shredded Wheat, original big biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 79.0,
    "energy_kcal": 1410.0,
    "fat_g": 2.01,
    "fibre_g": 12.4,
    "folate_ug": 43.0,
    "iron_mg": 2.63,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 375.0,
    "potassium_mg": 381.0,
    "protein_g": 11.4,
    "salt_g": 0.005,
    "sat_fat_g": 0.41,
    "sodium_mg": 2.0,
    "sugar_g": 0.94,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173910",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "ready-to-eat",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
