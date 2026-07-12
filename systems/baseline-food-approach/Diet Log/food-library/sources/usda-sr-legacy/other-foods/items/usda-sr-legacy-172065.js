/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "McDONALD'S, Double Cheeseburger",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 18.8,
    "energy_kcal": 1180.0,
    "fat_g": 16.1,
    "fibre_g": 0.8,
    "folate_ug": 0.0,
    "iron_mg": 2.24,
    "magnesium_mg": 21.0,
    "omega3_g": 0.135,
    "phosphorus_mg": 166.0,
    "potassium_mg": 216.0,
    "protein_g": 15.5,
    "salt_g": 1.67,
    "sat_fat_g": 7.0,
    "sodium_mg": 668.0,
    "sugar_g": 4.23,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172065",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
