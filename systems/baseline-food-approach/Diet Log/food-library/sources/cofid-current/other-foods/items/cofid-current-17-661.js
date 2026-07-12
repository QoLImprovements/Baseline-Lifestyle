/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Average of UK/Irish, Danish, French, New Zealand",
  "id": "cofid-current-17-661",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Butter, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.6,
    "energy_kcal": 744.0,
    "fat_g": 82.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 2.0,
    "omega3_g": 0.68,
    "phosphorus_mg": 23.0,
    "potassium_mg": 27.0,
    "protein_g": 0.6,
    "salt_g": 0.02,
    "sat_fat_g": 52.09,
    "sodium_mg": 8.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 1060.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.85,
    "vitamin_k_ug": 7.4
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-661",
  "state": "Unspecified",
  "subcategory": "OA",
  "tags": [
    "oa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
