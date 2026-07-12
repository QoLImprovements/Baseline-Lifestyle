/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, UK, including standard, peeled and baby. Base trimmed and outer leaves removed, boiled for 4-10 minutes",
  "id": "cofid-current-13-630",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Brussels sprouts, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 4.2,
    "energy_kcal": 32.0,
    "fat_g": 0.4,
    "fibre_g": 3.2,
    "folate_ug": 124.0,
    "iron_mg": 0.6,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 404.0,
    "protein_g": 3.1,
    "salt_g": 0.0125,
    "sat_fat_g": 0.09,
    "sodium_mg": 5.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 40.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 127.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-630",
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
