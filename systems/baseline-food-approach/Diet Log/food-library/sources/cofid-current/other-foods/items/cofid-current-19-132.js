/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "8 samples",
  "id": "cofid-current-19-132",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Haggis, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 19.2,
    "energy_kcal": 310.0,
    "fat_g": 21.7,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 4.8,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 170.0,
    "protein_g": 10.7,
    "salt_g": 1.925,
    "sat_fat_g": 7.6,
    "sodium_mg": 770.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1800.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-132",
  "state": "Boiled",
  "subcategory": "MI",
  "tags": [
    "boiled",
    "mi",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
