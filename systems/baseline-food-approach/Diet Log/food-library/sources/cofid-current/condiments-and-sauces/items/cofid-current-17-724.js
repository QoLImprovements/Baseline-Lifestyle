/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "7 samples, 3 brands",
  "id": "cofid-current-17-724",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gravy instant granules",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 65.2,
    "energy_kcal": 407.0,
    "fat_g": 16.1,
    "fibre_g": 1.6,
    "folate_ug": 0.0,
    "iron_mg": 0.5,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 150.0,
    "protein_g": 4.4,
    "salt_g": 13.25,
    "sat_fat_g": 10.66,
    "sodium_mg": 5300.0,
    "sugar_g": 5.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-724",
  "state": "Unspecified",
  "subcategory": "WY",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wy"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
