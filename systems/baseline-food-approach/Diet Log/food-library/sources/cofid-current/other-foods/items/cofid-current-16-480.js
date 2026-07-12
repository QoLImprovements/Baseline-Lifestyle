/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 16-435 using edible conversion factor of 0.74",
  "id": "cofid-current-16-480",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Plaice, flesh only, steamed, fillets weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 68.0,
    "fat_g": 1.1,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.09,
    "magnesium_mg": 18.0,
    "omega3_g": 0.2,
    "phosphorus_mg": 139.0,
    "potassium_mg": 200.0,
    "protein_g": 14.5,
    "salt_g": 0.325,
    "sat_fat_g": 0.19,
    "sodium_mg": 130.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-480",
  "state": "Steamed",
  "subcategory": "JA",
  "tags": [
    "ja",
    "other-foods",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
