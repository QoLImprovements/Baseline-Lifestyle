/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "10 samples, 7 brands. Boiled 3-10 minutes",
  "id": "cofid-old-13-428",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, broad, frozen, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 11.7,
    "energy_kcal": 81.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 1.6,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 280.0,
    "protein_g": 7.9,
    "salt_g": 0.02,
    "sat_fat_g": 0.1,
    "sodium_mg": 8.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 11.4
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-428",
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
