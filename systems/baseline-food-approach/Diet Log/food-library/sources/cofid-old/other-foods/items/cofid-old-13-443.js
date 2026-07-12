/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brands; boiled 5-10 minutes",
  "id": "cofid-old-13-443",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Brussels sprouts, frozen, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 2.5,
    "energy_kcal": 35.0,
    "fat_g": 1.3,
    "fibre_g": 0.0,
    "folate_ug": 67.0,
    "iron_mg": 0.6,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 340.0,
    "protein_g": 3.5,
    "salt_g": 0.02,
    "sat_fat_g": 0.3,
    "sodium_mg": 8.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 69.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 119.5
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-443",
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
