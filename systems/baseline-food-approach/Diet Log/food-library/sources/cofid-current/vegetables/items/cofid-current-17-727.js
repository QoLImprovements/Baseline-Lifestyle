/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "8 samples, 4 brands including Oxo",
  "id": "cofid-current-17-727",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stock cubes, vegetable",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 17.3,
    "fibre_g": 1.8,
    "folate_ug": 0.0,
    "iron_mg": 2.8,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 390.0,
    "protein_g": 13.5,
    "salt_g": 42.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 16800.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-727",
  "state": "Unspecified",
  "subcategory": "WY",
  "tags": [
    "unspecified",
    "vegetables",
    "wy"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
