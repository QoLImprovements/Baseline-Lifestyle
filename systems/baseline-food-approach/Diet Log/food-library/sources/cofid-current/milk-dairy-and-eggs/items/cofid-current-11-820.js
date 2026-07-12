/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products",
  "id": "cofid-current-11-820",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream crackers",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 69.7,
    "energy_kcal": 445.0,
    "fat_g": 16.4,
    "fibre_g": 3.9,
    "folate_ug": 19.0,
    "iron_mg": 1.97,
    "magnesium_mg": 22.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 103.0,
    "potassium_mg": 215.0,
    "protein_g": 8.9,
    "salt_g": 0.96,
    "sat_fat_g": 7.38,
    "sodium_mg": 384.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-820",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
