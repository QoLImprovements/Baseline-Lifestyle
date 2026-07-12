/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171680",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, MALT-O-MEAL, OAT BLENDERS with honey & almonds",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 77.3,
    "energy_kcal": 379.0,
    "fat_g": 4.88,
    "fibre_g": 6.1,
    "folate_ug": 667.0,
    "iron_mg": 41.4,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 204.0,
    "potassium_mg": 240.0,
    "protein_g": 7.8,
    "salt_g": 1.1325,
    "sat_fat_g": 0.62,
    "sodium_mg": 453.0,
    "sugar_g": 20.3,
    "vitamin_a_ug": 1880.0,
    "vitamin_c_mg": 29.6,
    "vitamin_e_mg": 1.37,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171680",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
