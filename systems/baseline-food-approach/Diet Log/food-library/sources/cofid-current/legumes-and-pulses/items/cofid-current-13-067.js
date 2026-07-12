/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-067",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, broad, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 32.5,
    "energy_kcal": 245.0,
    "fat_g": 2.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.5,
    "magnesium_mg": 190.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 590.0,
    "potassium_mg": 1090.0,
    "protein_g": 26.1,
    "salt_g": 0.0275,
    "sat_fat_g": 0.3,
    "sodium_mg": 11.0,
    "sugar_g": 5.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-067",
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
