/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1035",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, melting moments, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 57.8,
    "energy_kcal": 564.0,
    "fat_g": 37.1,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.96,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 81.0,
    "protein_g": 3.4,
    "salt_g": 0.8375,
    "sat_fat_g": 23.31,
    "sodium_mg": 335.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 471.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 3.54
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1035",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
