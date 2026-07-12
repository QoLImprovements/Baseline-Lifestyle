/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "20 samples including Gold Lowest and Outline. Fat data from TRANSFAIR",
  "id": "cofid-old-17-553",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fat spread (20-25% fat), not polyunsaturated",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 2.5,
    "energy_kcal": 262.0,
    "fat_g": 25.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.7,
    "phosphorus_mg": 0.0,
    "potassium_mg": 630.0,
    "protein_g": 5.9,
    "salt_g": 1.35,
    "sat_fat_g": 6.82,
    "sodium_mg": 540.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 566.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-553",
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
