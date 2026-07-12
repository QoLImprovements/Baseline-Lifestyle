/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Whole beans. Analysis and literature sources",
  "id": "cofid-current-13-115",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, soya, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 240.0,
    "carbs_g": 15.8,
    "energy_kcal": 370.0,
    "fat_g": 18.6,
    "fibre_g": 0.0,
    "folate_ug": 370.0,
    "iron_mg": 9.7,
    "magnesium_mg": 250.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 660.0,
    "potassium_mg": 1730.0,
    "protein_g": 35.9,
    "salt_g": 0.0125,
    "sat_fat_g": 2.3,
    "sodium_mg": 5.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-115",
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
