/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "6 samples, 4 brands, including bio varieties",
  "id": "cofid-current-12-533",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, virtually fat free/diet, plain",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 8.2,
    "energy_kcal": 54.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.13,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 151.0,
    "potassium_mg": 247.0,
    "protein_g": 5.4,
    "salt_g": 0.1775,
    "sat_fat_g": 0.1,
    "sodium_mg": 71.0,
    "sugar_g": 7.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-533",
  "state": "Unspecified",
  "subcategory": "BN",
  "tags": [
    "bn",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
