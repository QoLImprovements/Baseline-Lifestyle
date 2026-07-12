/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "12 samples, 7 products",
  "id": "cofid-current-11-919",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Strudel, fruit filled, retail, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 29.1,
    "energy_kcal": 241.0,
    "fat_g": 13.5,
    "fibre_g": 5.4,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.41,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 2.7,
    "salt_g": 0.0,
    "sat_fat_g": 5.02,
    "sodium_mg": 0.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-919",
  "state": "Frozen",
  "subcategory": "AS",
  "tags": [
    "as",
    "frozen",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
