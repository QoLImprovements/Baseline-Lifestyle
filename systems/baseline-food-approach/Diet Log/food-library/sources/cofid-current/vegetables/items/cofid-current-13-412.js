/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Calculation from fried in corn oil",
  "id": "cofid-current-13-412",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Aubergine, fried in butter",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 2.8,
    "energy_kcal": 302.0,
    "fat_g": 31.9,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.5,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 170.0,
    "protein_g": 1.2,
    "salt_g": 0.005,
    "sat_fat_g": 21.1,
    "sodium_mg": 2.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 5.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-412",
  "state": "Fried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "fried",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
