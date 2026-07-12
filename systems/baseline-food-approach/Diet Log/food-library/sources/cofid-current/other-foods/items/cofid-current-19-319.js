/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "20 samples",
  "id": "cofid-current-19-319",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Saveloy, unbattered, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 10.8,
    "energy_kcal": 296.0,
    "fat_g": 22.3,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 4.5,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 180.0,
    "protein_g": 13.8,
    "salt_g": 2.875,
    "sat_fat_g": 7.5,
    "sodium_mg": 1150.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-319",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "mi",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
