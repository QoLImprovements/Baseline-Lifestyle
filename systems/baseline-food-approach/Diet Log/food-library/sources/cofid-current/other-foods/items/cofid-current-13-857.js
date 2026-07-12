/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "LGC, 5 samples and calculation from dried",
  "id": "cofid-current-13-857",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tarragon, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 6.3,
    "energy_kcal": 49.0,
    "fat_g": 1.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 450.0,
    "protein_g": 3.4,
    "salt_g": 0.0225,
    "sat_fat_g": 0.0,
    "sodium_mg": 9.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-857",
  "state": "Unspecified",
  "subcategory": "H",
  "tags": [
    "h",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
