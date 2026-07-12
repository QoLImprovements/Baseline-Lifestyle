/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Split beans, no seed coat, soaked and boiled. Literature sources",
  "id": "cofid-current-13-099",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, mung, dahl, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 15.3,
    "energy_kcal": 92.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 1.2,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 270.0,
    "protein_g": 7.8,
    "salt_g": 0.005,
    "sat_fat_g": 0.1,
    "sodium_mg": 2.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-099",
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
