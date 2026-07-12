/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Analytical and literature sources.",
  "id": "cofid-current-13-074",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, chick peas, Kabuli, whole, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 49.6,
    "energy_kcal": 320.0,
    "fat_g": 5.4,
    "fibre_g": 0.0,
    "folate_ug": 180.0,
    "iron_mg": 5.5,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 1000.0,
    "protein_g": 21.3,
    "salt_g": 0.0975,
    "sat_fat_g": 0.5,
    "sodium_mg": 39.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.88,
    "vitamin_k_ug": 8.92
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-074",
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
