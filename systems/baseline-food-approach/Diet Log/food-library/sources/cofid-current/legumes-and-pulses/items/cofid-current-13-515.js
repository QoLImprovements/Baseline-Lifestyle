/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "As raw, boiled for 3-6 minutes, not runner bean",
  "id": "cofid-current-13-515",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, green, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 4.0,
    "energy_kcal": 26.0,
    "fat_g": 0.3,
    "fibre_g": 4.1,
    "folate_ug": 58.0,
    "iron_mg": 1.06,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 304.0,
    "protein_g": 2.1,
    "salt_g": 0.0,
    "sat_fat_g": 0.06,
    "sodium_mg": 0.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-515",
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
