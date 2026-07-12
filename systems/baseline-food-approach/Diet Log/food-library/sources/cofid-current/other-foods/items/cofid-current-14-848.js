/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-14-848",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tigernuts",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 45.7,
    "energy_kcal": 403.0,
    "fat_g": 23.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.2,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 210.0,
    "potassium_mg": 14.0,
    "protein_g": 4.3,
    "salt_g": 0.0025,
    "sat_fat_g": 4.0,
    "sodium_mg": 1.0,
    "sugar_g": 16.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-848",
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
