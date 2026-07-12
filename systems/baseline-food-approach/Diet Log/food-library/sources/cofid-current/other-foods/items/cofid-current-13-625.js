/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, UK, trimmed and damaged outer leaves removed. Sliced and boiled for 5-8 minutes",
  "id": "cofid-current-13-625",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Leeks, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 2.5,
    "energy_kcal": 16.0,
    "fat_g": 0.2,
    "fibre_g": 1.9,
    "folate_ug": 44.0,
    "iron_mg": 0.22,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 169.0,
    "protein_g": 1.2,
    "salt_g": 0.0025,
    "sat_fat_g": 0.03,
    "sodium_mg": 1.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 9.5
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-625",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
