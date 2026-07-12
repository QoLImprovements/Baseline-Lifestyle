/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "11 samples, mixture of UK and imported, fresh. Tops, tails and strings removed, boiled for 5-6 minutes",
  "id": "cofid-current-13-654",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, runner, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 1.9,
    "energy_kcal": 16.0,
    "fat_g": 0.5,
    "fibre_g": 2.2,
    "folate_ug": 42.0,
    "iron_mg": 0.44,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 103.0,
    "protein_g": 1.1,
    "salt_g": 0.0,
    "sat_fat_g": 0.1,
    "sodium_mg": 0.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 26.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-654",
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
