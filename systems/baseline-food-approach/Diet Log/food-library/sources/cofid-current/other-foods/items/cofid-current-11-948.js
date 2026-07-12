/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated using a weight loss of 10%",
  "id": "cofid-current-11-948",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Currant buns, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 58.4,
    "energy_kcal": 311.0,
    "fat_g": 6.2,
    "fibre_g": 3.2,
    "folate_ug": 13.0,
    "iron_mg": 2.11,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 233.0,
    "protein_g": 8.9,
    "salt_g": 0.65,
    "sat_fat_g": 2.07,
    "sodium_mg": 260.0,
    "sugar_g": 17.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-948",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
