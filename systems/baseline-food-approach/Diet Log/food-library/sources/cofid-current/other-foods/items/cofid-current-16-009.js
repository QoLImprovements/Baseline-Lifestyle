/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from steamed 16-008",
  "id": "cofid-current-16-009",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Catfish, flesh only, steamed, weighed with bones",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 101.0,
    "fat_g": 3.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.5,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 270.0,
    "protein_g": 18.2,
    "salt_g": 0.23,
    "sat_fat_g": 0.4,
    "sodium_mg": 92.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-009",
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
