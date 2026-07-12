/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Analysis and calculation from recipe proportions (pears 42%, peaches 41%, pineapple 8%, grapes 5% and cherries 4%). Drained proportion = 0.66",
  "id": "cofid-current-14-097",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fruit cocktail, canned in syrup, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 14.8,
    "energy_kcal": 57.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.3,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 95.0,
    "protein_g": 0.4,
    "salt_g": 0.0075,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.0,
    "sugar_g": 14.8,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-097",
  "state": "Canned",
  "subcategory": "FA",
  "tags": [
    "canned",
    "fa",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
