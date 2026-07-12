/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "16 samples, 9 brands",
  "id": "cofid-current-13-532",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Baked beans, canned in tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 15.0,
    "energy_kcal": 81.0,
    "fat_g": 0.5,
    "fibre_g": 4.9,
    "folate_ug": 29.0,
    "iron_mg": 1.42,
    "magnesium_mg": 30.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 88.0,
    "potassium_mg": 272.0,
    "protein_g": 5.0,
    "salt_g": 0.6525,
    "sat_fat_g": 0.09,
    "sodium_mg": 261.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-532",
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
