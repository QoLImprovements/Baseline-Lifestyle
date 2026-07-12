/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "item-6-3-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172062",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "item-6-3-oz",
      "kind": "unit",
      "label": "item (6.3 oz)"
    }
  ],
  "name": "McDONALD'S, Strawberry Sundae",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 28.1,
    "energy_kcal": 158.0,
    "fat_g": 3.95,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.1,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 173.0,
    "protein_g": 3.19,
    "salt_g": 0.1175,
    "sat_fat_g": 2.01,
    "sodium_mg": 47.0,
    "sugar_g": 25.3,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172062",
  "state": "Raw",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
