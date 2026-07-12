/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Soaked and boiled. Split peas, no seed coat. Literature sources",
  "id": "cofid-current-13-105",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, pigeon peas, dahl, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 21.2,
    "energy_kcal": 118.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 1.0,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 510.0,
    "protein_g": 8.7,
    "salt_g": 0.035,
    "sat_fat_g": 0.1,
    "sodium_mg": 14.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-105",
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
