/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "7 samples, 5 products",
  "id": "cofid-current-12-507",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cornetto type ice cream cone",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 39.6,
    "energy_kcal": 292.0,
    "fat_g": 14.4,
    "fibre_g": 1.2,
    "folate_ug": 9.0,
    "iron_mg": 1.53,
    "magnesium_mg": 33.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 88.0,
    "potassium_mg": 212.0,
    "protein_g": 3.5,
    "salt_g": 0.225,
    "sat_fat_g": 11.04,
    "sodium_mg": 90.0,
    "sugar_g": 27.9,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-507",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
