/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Estimated from apple and orange juice and industry data, 2013",
  "id": "cofid-current-17-746",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fruit juice, mixed",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 10.3,
    "energy_kcal": 40.0,
    "fat_g": 0.0,
    "fibre_g": 0.8,
    "folate_ug": 11.0,
    "iron_mg": 0.07,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 123.0,
    "protein_g": 0.4,
    "salt_g": 0.005,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 33.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-746",
  "state": "Unspecified",
  "subcategory": "PE",
  "tags": [
    "beverages",
    "pe",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
