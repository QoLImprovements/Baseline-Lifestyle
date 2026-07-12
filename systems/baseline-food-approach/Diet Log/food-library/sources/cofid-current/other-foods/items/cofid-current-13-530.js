/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "12 samples, 9 brands, whole and chopped, no added salt",
  "id": "cofid-current-13-530",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomatoes, canned, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 3.8,
    "energy_kcal": 19.0,
    "fat_g": 0.1,
    "fibre_g": 0.8,
    "folate_ug": 11.0,
    "iron_mg": 0.57,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 212.0,
    "protein_g": 1.1,
    "salt_g": 0.0125,
    "sat_fat_g": 0.01,
    "sodium_mg": 5.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 1.36,
    "vitamin_k_ug": 6.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-530",
  "state": "Canned",
  "subcategory": "DG",
  "tags": [
    "canned",
    "dg",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
