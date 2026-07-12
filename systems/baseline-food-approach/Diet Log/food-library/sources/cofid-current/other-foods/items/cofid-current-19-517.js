/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "22 samples including Danish, French, German and Italian. 90-100% meat",
  "id": "cofid-current-19-517",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salami",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.5,
    "energy_kcal": 438.0,
    "fat_g": 39.2,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 1.3,
    "magnesium_mg": 18.0,
    "omega3_g": 0.37,
    "phosphorus_mg": 170.0,
    "potassium_mg": 320.0,
    "protein_g": 20.9,
    "salt_g": 3.825,
    "sat_fat_g": 14.6,
    "sodium_mg": 1530.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 1.11
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-517",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "mi",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
