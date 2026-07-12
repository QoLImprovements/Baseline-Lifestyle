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
  "id": "cofid-current-11-1108",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Porridge, made with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 13.3,
    "energy_kcal": 112.0,
    "fat_g": 4.7,
    "fibre_g": 0.9,
    "folate_ug": 8.0,
    "iron_mg": 0.46,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 147.0,
    "potassium_mg": 209.0,
    "protein_g": 4.9,
    "salt_g": 0.11,
    "sat_fat_g": 2.54,
    "sodium_mg": 44.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1108",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
