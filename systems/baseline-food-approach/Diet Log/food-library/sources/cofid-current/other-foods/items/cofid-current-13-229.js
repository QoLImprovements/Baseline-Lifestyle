/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples; boiled 2 hours",
  "id": "cofid-current-13-229",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cole leaves, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 1.2,
    "energy_kcal": 19.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 2.4,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 170.0,
    "protein_g": 1.7,
    "salt_g": 0.2125,
    "sat_fat_g": 0.1,
    "sodium_mg": 85.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-229",
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
