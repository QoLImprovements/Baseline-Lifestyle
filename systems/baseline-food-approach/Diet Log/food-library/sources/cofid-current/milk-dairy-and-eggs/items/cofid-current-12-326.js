/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands, including low fat and semi-skimmed",
  "id": "cofid-current-12-326",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, flavoured, pasteurised, strawberry, banana",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 9.6,
    "energy_kcal": 64.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.13,
    "magnesium_mg": 12.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 102.0,
    "potassium_mg": 168.0,
    "protein_g": 3.6,
    "salt_g": 0.13,
    "sat_fat_g": 1.02,
    "sodium_mg": 52.0,
    "sugar_g": 8.9,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-326",
  "state": "Raw",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
