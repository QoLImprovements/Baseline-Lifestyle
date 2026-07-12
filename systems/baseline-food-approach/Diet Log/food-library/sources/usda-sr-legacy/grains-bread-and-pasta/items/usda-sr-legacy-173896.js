/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173896",
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
      "gramsPerUnit": 113.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals ready-to-eat, wheat germ, toasted, plain",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 49.6,
    "energy_kcal": 1600.0,
    "fat_g": 10.7,
    "fibre_g": 15.1,
    "folate_ug": 352.0,
    "iron_mg": 9.09,
    "magnesium_mg": 320.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1150.0,
    "potassium_mg": 947.0,
    "protein_g": 29.1,
    "salt_g": 0.01,
    "sat_fat_g": 1.83,
    "sodium_mg": 4.0,
    "sugar_g": 7.8,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 16.0,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173896",
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
