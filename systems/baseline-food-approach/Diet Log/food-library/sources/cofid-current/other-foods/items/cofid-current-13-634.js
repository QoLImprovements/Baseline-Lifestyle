/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, fresh, imported. Boiled for 4-13 minutes",
  "id": "cofid-current-13-634",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweetcorn, baby, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 4.6,
    "energy_kcal": 31.0,
    "fat_g": 0.6,
    "fibre_g": 2.4,
    "folate_ug": 160.0,
    "iron_mg": 0.25,
    "magnesium_mg": 22.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 50.0,
    "potassium_mg": 145.0,
    "protein_g": 2.2,
    "salt_g": 0.0,
    "sat_fat_g": 0.13,
    "sodium_mg": 0.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-634",
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
