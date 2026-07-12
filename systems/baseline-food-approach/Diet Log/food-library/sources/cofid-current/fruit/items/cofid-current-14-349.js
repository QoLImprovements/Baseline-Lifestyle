/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from 400g blackberries, 550g apples, 175g water, 115g sugar",
  "id": "cofid-current-14-349",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Blackberry and apple, stewed with sugar",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 15.8,
    "energy_kcal": 63.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.3,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 94.0,
    "protein_g": 0.4,
    "salt_g": 0.005,
    "sat_fat_g": 0.03,
    "sodium_mg": 2.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-349",
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
