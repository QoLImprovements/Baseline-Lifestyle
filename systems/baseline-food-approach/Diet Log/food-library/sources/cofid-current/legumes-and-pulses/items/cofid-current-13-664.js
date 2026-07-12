/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "6 samples, 6 products, soaked and boiled for 30-45 minutes",
  "id": "cofid-current-13-664",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, mung, whole, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 15.8,
    "energy_kcal": 100.0,
    "fat_g": 0.7,
    "fibre_g": 6.1,
    "folate_ug": 35.0,
    "iron_mg": 1.66,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 133.0,
    "potassium_mg": 339.0,
    "protein_g": 8.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.18,
    "sodium_mg": 0.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-664",
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
