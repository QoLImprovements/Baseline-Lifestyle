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
  "id": "cofid-current-17-723",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Worcestershire sauce",
  "nutritionPerBasis": {
    "calcium_mg": 190.0,
    "carbs_g": 28.3,
    "energy_kcal": 113.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 10.1,
    "magnesium_mg": 73.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 600.0,
    "protein_g": 1.4,
    "salt_g": 3.75,
    "sat_fat_g": 0.0,
    "sodium_mg": 1500.0,
    "sugar_g": 21.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-723",
  "state": "Unspecified",
  "subcategory": "WCN",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wcn"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
