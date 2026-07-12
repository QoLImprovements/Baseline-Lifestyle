/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-775",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese sauce, made with whole milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 246.0,
    "carbs_g": 8.9,
    "energy_kcal": 197.0,
    "fat_g": 14.6,
    "fibre_g": 0.2,
    "folate_ug": 9.0,
    "iron_mg": 0.19,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 184.0,
    "potassium_mg": 163.0,
    "protein_g": 8.2,
    "salt_g": 0.53,
    "sat_fat_g": 9.12,
    "sodium_mg": 212.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 168.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 1.87
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-775",
  "state": "Unspecified",
  "subcategory": "WCD",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "wcd"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
