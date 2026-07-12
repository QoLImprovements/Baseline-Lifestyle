/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Analysed and calculated values",
  "id": "cofid-current-11-459",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chapatis, made without fat",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 43.7,
    "energy_kcal": 202.0,
    "fat_g": 1.0,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 2.1,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 150.0,
    "protein_g": 7.3,
    "salt_g": 0.3,
    "sat_fat_g": 0.1,
    "sodium_mg": 120.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-459",
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
