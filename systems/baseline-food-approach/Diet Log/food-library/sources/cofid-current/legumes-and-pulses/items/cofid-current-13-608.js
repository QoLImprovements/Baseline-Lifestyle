/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Calculated from raw beans (13-514)",
  "id": "cofid-current-13-608",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Green beans, dried",
  "nutritionPerBasis": {
    "calcium_mg": 535.0,
    "carbs_g": 31.9,
    "energy_kcal": 246.0,
    "fat_g": 4.4,
    "fibre_g": 35.0,
    "folate_ug": 0.0,
    "iron_mg": 10.7,
    "magnesium_mg": 254.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 386.0,
    "potassium_mg": 2942.0,
    "protein_g": 21.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.82,
    "sodium_mg": 0.0,
    "sugar_g": 22.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.53,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-608",
  "state": "Dried",
  "subcategory": "DI",
  "tags": [
    "di",
    "dried",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
