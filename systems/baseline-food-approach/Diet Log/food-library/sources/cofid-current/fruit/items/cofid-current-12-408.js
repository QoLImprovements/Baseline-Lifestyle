/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "8 samples, 5 brands including lemon, raspberry and passion fruit",
  "id": "cofid-current-12-408",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Torte, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 27.7,
    "energy_kcal": 258.0,
    "fat_g": 15.5,
    "fibre_g": 1.2,
    "folate_ug": 3.0,
    "iron_mg": 0.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 77.0,
    "potassium_mg": 116.0,
    "protein_g": 3.8,
    "salt_g": 0.22,
    "sat_fat_g": 9.35,
    "sodium_mg": 88.0,
    "sugar_g": 17.4,
    "vitamin_a_ug": 112.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-408",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
