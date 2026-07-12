/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 5 products, including Flora Light and own brands",
  "id": "cofid-current-12-499",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fat spread, low fat (26-39%), polyunsaturated",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 1.8,
    "energy_kcal": 339.0,
    "fat_g": 36.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.01,
    "magnesium_mg": 0.0,
    "omega3_g": 2.02,
    "phosphorus_mg": 4.0,
    "potassium_mg": 31.0,
    "protein_g": 0.0,
    "salt_g": 1.205,
    "sat_fat_g": 8.55,
    "sodium_mg": 482.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 962.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 10.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-499",
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
