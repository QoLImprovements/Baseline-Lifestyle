/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "5 samples, 2 brands",
  "id": "cofid-old-12-907",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, virtually fat free/diet, twin pot, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 7.8,
    "energy_kcal": 44.0,
    "fat_g": 0.1,
    "fibre_g": 1.0,
    "folate_ug": 8.0,
    "iron_mg": 0.12,
    "magnesium_mg": 14.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 108.0,
    "potassium_mg": 196.0,
    "protein_g": 3.4,
    "salt_g": 0.145,
    "sat_fat_g": 0.05,
    "sodium_mg": 58.0,
    "sugar_g": 6.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-907",
  "state": "Unspecified",
  "subcategory": "BNS",
  "tags": [
    "bns",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
