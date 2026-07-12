/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands",
  "id": "cofid-current-13-246",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gherkins, pickled, drained",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 2.6,
    "energy_kcal": 14.0,
    "fat_g": 0.1,
    "fibre_g": 1.5,
    "folate_ug": 6.0,
    "iron_mg": 0.7,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 110.0,
    "protein_g": 0.9,
    "salt_g": 1.725,
    "sat_fat_g": 0.0,
    "sodium_mg": 690.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-246",
  "state": "Unspecified",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
