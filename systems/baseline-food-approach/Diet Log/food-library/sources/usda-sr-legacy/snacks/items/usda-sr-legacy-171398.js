/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "18-piece",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171398",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "18-piece",
      "kind": "unit",
      "label": "18 piece"
    }
  ],
  "name": "Babyfood, Snack, GERBER, GRADUATES, LIL CRUNCHIES, baked whole grain corn snack",
  "nutritionPerBasis": {
    "calcium_mg": 285.0,
    "carbs_g": 61.6,
    "energy_kcal": 503.0,
    "fat_g": 28.6,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 6.4,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1040.0,
    "potassium_mg": 214.0,
    "protein_g": 0.0,
    "salt_g": 1.25,
    "sat_fat_g": 4.67,
    "sodium_mg": 500.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 8.57,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171398",
  "state": "Baked",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "baked",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
