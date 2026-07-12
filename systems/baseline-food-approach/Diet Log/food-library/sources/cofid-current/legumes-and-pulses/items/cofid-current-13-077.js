/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Soaked and boiled",
  "id": "cofid-current-13-077",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, chick peas, Kabuli, split, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 17.4,
    "energy_kcal": 114.0,
    "fat_g": 2.0,
    "fibre_g": 0.0,
    "folate_ug": 54.0,
    "iron_mg": 2.1,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 270.0,
    "protein_g": 7.7,
    "salt_g": 0.0125,
    "sat_fat_g": 0.2,
    "sodium_mg": 5.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-077",
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
