/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "11 samples, UK, fresh. Removed from pods and boiled for 3-10 minutes",
  "id": "cofid-current-13-648",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, broad, whole, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 12.3,
    "energy_kcal": 91.0,
    "fat_g": 1.0,
    "fibre_g": 9.0,
    "folate_ug": 66.0,
    "iron_mg": 1.82,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 162.0,
    "potassium_mg": 413.0,
    "protein_g": 9.0,
    "salt_g": 0.005,
    "sat_fat_g": 0.13,
    "sodium_mg": 2.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-648",
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
