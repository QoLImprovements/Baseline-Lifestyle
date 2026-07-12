/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "6 samples, 6 products",
  "id": "cofid-current-11-885",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, egg fried, ready cooked, re-heated, retail, not takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 28.1,
    "energy_kcal": 169.0,
    "fat_g": 5.3,
    "fibre_g": 2.8,
    "folate_ug": 8.0,
    "iron_mg": 0.41,
    "magnesium_mg": 12.0,
    "omega3_g": 0.25,
    "phosphorus_mg": 77.0,
    "potassium_mg": 88.0,
    "protein_g": 3.9,
    "salt_g": 1.0225,
    "sat_fat_g": 0.72,
    "sodium_mg": 409.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-885",
  "state": "Fried",
  "subcategory": "AC",
  "tags": [
    "ac",
    "fried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
