/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "20 samples, pine kernels",
  "id": "cofid-current-14-839",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pine nuts, kernel only",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 4.0,
    "energy_kcal": 688.0,
    "fat_g": 68.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.6,
    "magnesium_mg": 270.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 650.0,
    "potassium_mg": 780.0,
    "protein_g": 14.0,
    "salt_g": 0.0025,
    "sat_fat_g": 4.6,
    "sodium_mg": 1.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 13.85,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-839",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
