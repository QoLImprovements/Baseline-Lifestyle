/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "7 samples, 5 products, including shelled and in pods. Boiled for 3-6 minutes, pods discarded",
  "id": "cofid-current-13-667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, edamame, frozen, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 6.5,
    "energy_kcal": 142.0,
    "fat_g": 7.6,
    "fibre_g": 5.9,
    "folate_ug": 15.0,
    "iron_mg": 2.73,
    "magnesium_mg": 65.0,
    "omega3_g": 0.42,
    "phosphorus_mg": 204.0,
    "potassium_mg": 497.0,
    "protein_g": 12.2,
    "salt_g": 0.0125,
    "sat_fat_g": 0.85,
    "sodium_mg": 5.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 2.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-667",
  "state": "Boiled",
  "subcategory": "DB",
  "tags": [
    "boiled",
    "db",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
