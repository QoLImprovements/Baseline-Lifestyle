/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "2-pieces",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172038",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "2-pieces",
      "kind": "unit",
      "label": "2 pieces"
    }
  ],
  "name": "Fast foods, burrito, with beans",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 32.9,
    "energy_kcal": 862.0,
    "fat_g": 6.22,
    "fibre_g": 0.0,
    "folate_ug": 40.0,
    "iron_mg": 2.08,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 301.0,
    "protein_g": 6.48,
    "salt_g": 1.135,
    "sat_fat_g": 3.17,
    "sodium_mg": 454.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 153.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172038",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
