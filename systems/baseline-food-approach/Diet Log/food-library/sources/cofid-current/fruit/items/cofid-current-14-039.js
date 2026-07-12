/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "10 samples and literature",
  "id": "cofid-current-14-039",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Avocado, Fuerte, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 1.9,
    "energy_kcal": 189.0,
    "fat_g": 19.3,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.4,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 430.0,
    "protein_g": 2.1,
    "salt_g": 0.0225,
    "sat_fat_g": 3.5,
    "sodium_mg": 9.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 3.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-039",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
