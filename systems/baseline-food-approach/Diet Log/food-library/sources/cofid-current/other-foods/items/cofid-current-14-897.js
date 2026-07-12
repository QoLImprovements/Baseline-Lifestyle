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
  "id": "cofid-current-14-897",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Almonds, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 268.0,
    "carbs_g": 5.9,
    "energy_kcal": 579.0,
    "fat_g": 52.5,
    "fibre_g": 10.9,
    "folate_ug": 55.0,
    "iron_mg": 3.73,
    "magnesium_mg": 279.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 471.0,
    "potassium_mg": 713.0,
    "protein_g": 21.0,
    "salt_g": 0.0075,
    "sat_fat_g": 4.09,
    "sodium_mg": 3.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 23.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-897",
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
