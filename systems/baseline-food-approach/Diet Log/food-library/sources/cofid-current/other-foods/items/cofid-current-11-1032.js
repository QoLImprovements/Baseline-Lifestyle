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
  "id": "cofid-current-11-1032",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, plain, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 66.0,
    "energy_kcal": 471.0,
    "fat_g": 22.1,
    "fibre_g": 2.0,
    "folate_ug": 7.0,
    "iron_mg": 1.22,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 112.0,
    "protein_g": 6.2,
    "salt_g": 0.5025,
    "sat_fat_g": 13.39,
    "sodium_mg": 201.0,
    "sugar_g": 26.4,
    "vitamin_a_ug": 277.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 2.2
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1032",
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
