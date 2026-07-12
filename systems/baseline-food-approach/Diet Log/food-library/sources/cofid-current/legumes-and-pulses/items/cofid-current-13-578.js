/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "5 cans (Heinz), and manufacturer's data",
  "id": "cofid-current-13-578",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Baked beans, canned in barbecue sauce",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 14.0,
    "energy_kcal": 77.0,
    "fat_g": 0.4,
    "fibre_g": 4.9,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 5.3,
    "salt_g": 0.65,
    "sat_fat_g": 0.0,
    "sodium_mg": 260.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-578",
  "state": "Baked",
  "subcategory": "DB",
  "tags": [
    "baked",
    "db",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
