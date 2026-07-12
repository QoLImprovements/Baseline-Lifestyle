/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Whole beans. Literature sources",
  "id": "cofid-current-13-106",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, pinto, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 57.1,
    "energy_kcal": 327.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 520.0,
    "iron_mg": 5.4,
    "magnesium_mg": 170.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 440.0,
    "potassium_mg": 1340.0,
    "protein_g": 21.1,
    "salt_g": 0.025,
    "sat_fat_g": 0.2,
    "sodium_mg": 10.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-106",
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
