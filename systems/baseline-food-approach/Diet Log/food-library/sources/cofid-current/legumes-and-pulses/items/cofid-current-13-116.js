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
  "id": "cofid-current-13-116",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, soya, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 5.1,
    "energy_kcal": 141.0,
    "fat_g": 7.3,
    "fibre_g": 0.0,
    "folate_ug": 54.0,
    "iron_mg": 3.0,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 510.0,
    "protein_g": 14.0,
    "salt_g": 0.0025,
    "sat_fat_g": 0.9,
    "sodium_mg": 1.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-116",
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
