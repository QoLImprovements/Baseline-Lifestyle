/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, including Fairtrade and organic, pre-packed and loose",
  "id": "cofid-current-14-318",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bananas, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 20.3,
    "energy_kcal": 81.0,
    "fat_g": 0.1,
    "fibre_g": 1.4,
    "folate_ug": 14.0,
    "iron_mg": 0.27,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 330.0,
    "protein_g": 1.2,
    "salt_g": 0.0,
    "sat_fat_g": 0.04,
    "sodium_mg": 0.0,
    "sugar_g": 18.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.06
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-318",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
