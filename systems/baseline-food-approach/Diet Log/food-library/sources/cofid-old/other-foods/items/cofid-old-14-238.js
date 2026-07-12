/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, 6 brands; stones removed, Drained proportion = 0.64",
  "id": "cofid-old-14-238",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Prunes, canned in syrup, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 23.0,
    "energy_kcal": 90.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 2.2,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 340.0,
    "protein_g": 0.6,
    "salt_g": 0.045,
    "sat_fat_g": 0.0,
    "sodium_mg": 18.0,
    "sugar_g": 23.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-238",
  "state": "Canned",
  "subcategory": "FA",
  "tags": [
    "canned",
    "fa",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
