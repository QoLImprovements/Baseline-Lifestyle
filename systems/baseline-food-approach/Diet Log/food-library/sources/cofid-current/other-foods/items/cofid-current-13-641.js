/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, imported, boiled for 3-6 minutes",
  "id": "cofid-current-13-641",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, mange-tout, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 4.2,
    "energy_kcal": 32.0,
    "fat_g": 0.4,
    "fibre_g": 1.6,
    "folate_ug": 12.0,
    "iron_mg": 0.83,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 169.0,
    "protein_g": 3.3,
    "salt_g": 0.0025,
    "sat_fat_g": 0.08,
    "sodium_mg": 1.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 15.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-641",
  "state": "Boiled",
  "subcategory": "DF",
  "tags": [
    "boiled",
    "df",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
