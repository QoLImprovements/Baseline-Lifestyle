/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Split beans, no seed coat. Literature sources",
  "id": "cofid-current-13-098",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, mung, dahl, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 46.3,
    "energy_kcal": 291.0,
    "fat_g": 1.1,
    "fibre_g": 0.0,
    "folate_ug": 140.0,
    "iron_mg": 5.5,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 390.0,
    "potassium_mg": 1250.0,
    "protein_g": 26.8,
    "salt_g": 0.03,
    "sat_fat_g": 0.3,
    "sodium_mg": 12.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-098",
  "state": "Dried",
  "subcategory": "DB",
  "tags": [
    "db",
    "dried",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
