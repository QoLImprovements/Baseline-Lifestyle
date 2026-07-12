/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, UK grown and imported, pre-packed and loose, including dwarf, fine and extra fine, not runner bean",
  "id": "cofid-current-13-514",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 3.1,
    "energy_kcal": 24.0,
    "fat_g": 0.4,
    "fibre_g": 3.4,
    "folate_ug": 58.0,
    "iron_mg": 1.04,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 286.0,
    "protein_g": 2.1,
    "salt_g": 0.0,
    "sat_fat_g": 0.08,
    "sodium_mg": 0.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 39.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-514",
  "state": "Raw",
  "subcategory": "DB",
  "tags": [
    "db",
    "legumes-and-pulses",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
