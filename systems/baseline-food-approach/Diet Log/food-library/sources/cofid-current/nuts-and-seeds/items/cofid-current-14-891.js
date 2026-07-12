/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "8 samples",
  "id": "cofid-current-14-891",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Macadamia nuts, salted",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 4.8,
    "energy_kcal": 748.0,
    "fat_g": 77.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.6,
    "magnesium_mg": 100.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 300.0,
    "protein_g": 7.9,
    "salt_g": 1.0,
    "sat_fat_g": 11.2,
    "sodium_mg": 400.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-891",
  "state": "Unspecified",
  "subcategory": "G",
  "tags": [
    "g",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
