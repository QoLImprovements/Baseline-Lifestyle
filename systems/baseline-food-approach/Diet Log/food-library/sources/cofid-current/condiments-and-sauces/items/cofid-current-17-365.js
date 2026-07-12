/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "9 samples, 5 brands",
  "id": "cofid-current-17-365",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mustard, wholegrain",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 4.2,
    "energy_kcal": 140.0,
    "fat_g": 10.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.8,
    "magnesium_mg": 93.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 220.0,
    "protein_g": 8.2,
    "salt_g": 4.05,
    "sat_fat_g": 0.6,
    "sodium_mg": 1620.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-365",
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
