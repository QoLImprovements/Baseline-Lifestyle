/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tbsp-drained",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-172238",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.6,
      "key": "tbsp-drained",
      "kind": "unit",
      "label": "tbsp, drained"
    }
  ],
  "name": "Capers, canned",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 4.89,
    "energy_kcal": 23.0,
    "fat_g": 0.86,
    "fibre_g": 3.2,
    "folate_ug": 23.0,
    "iron_mg": 1.67,
    "magnesium_mg": 33.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 10.0,
    "potassium_mg": 40.0,
    "protein_g": 2.36,
    "salt_g": 5.875,
    "sat_fat_g": 0.233,
    "sodium_mg": 2350.0,
    "sugar_g": 0.41,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 24.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172238",
  "state": "Canned",
  "subcategory": "Spices and Herbs",
  "tags": [
    "canned",
    "other-foods",
    "spices-and-herbs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
