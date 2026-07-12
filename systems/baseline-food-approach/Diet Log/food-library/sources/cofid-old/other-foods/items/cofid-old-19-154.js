/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "7 samples of a mixture of chilled, canned and delicatessen tongue. 90-100% meat",
  "id": "cofid-old-19-154",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tongue slices",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 201.0,
    "fat_g": 14.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 2.6,
    "magnesium_mg": 16.0,
    "omega3_g": 0.21,
    "phosphorus_mg": 260.0,
    "potassium_mg": 140.0,
    "protein_g": 18.7,
    "salt_g": 2.5,
    "sat_fat_g": 6.0,
    "sodium_mg": 1000.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-154",
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
