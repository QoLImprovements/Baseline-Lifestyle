/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, 10 products",
  "id": "cofid-current-19-466",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cornish pasty, retail",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 24.0,
    "energy_kcal": 278.0,
    "fat_g": 17.8,
    "fibre_g": 2.9,
    "folate_ug": 5.0,
    "iron_mg": 0.99,
    "magnesium_mg": 16.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 69.0,
    "potassium_mg": 200.0,
    "protein_g": 7.0,
    "salt_g": 1.175,
    "sat_fat_g": 8.53,
    "sodium_mg": 470.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-466",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "mr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
