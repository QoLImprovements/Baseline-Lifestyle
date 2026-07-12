/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "11 samples, 10 products, soaked and boiled for 15-50 minutes",
  "id": "cofid-current-13-661",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lentils, green and brown, whole, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 14.5,
    "energy_kcal": 92.0,
    "fat_g": 0.7,
    "fibre_g": 7.4,
    "folate_ug": 152.0,
    "iron_mg": 2.11,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 202.0,
    "protein_g": 7.8,
    "salt_g": 0.0,
    "sat_fat_g": 0.1,
    "sodium_mg": 0.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-661",
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
