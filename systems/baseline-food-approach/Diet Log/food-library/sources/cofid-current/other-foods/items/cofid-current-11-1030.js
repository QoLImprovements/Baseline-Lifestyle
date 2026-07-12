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
  "id": "cofid-current-11-1030",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bannocks, made with beremeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 56.8,
    "energy_kcal": 266.0,
    "fat_g": 1.7,
    "fibre_g": 1.0,
    "folate_ug": 17.0,
    "iron_mg": 3.65,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 327.0,
    "potassium_mg": 474.0,
    "protein_g": 9.3,
    "salt_g": 0.2775,
    "sat_fat_g": 0.23,
    "sodium_mg": 111.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1030",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
