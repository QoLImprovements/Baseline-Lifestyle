/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe. Ref. Wiles et al. (1980)",
  "id": "cofid-current-11-961",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, wholemeal, cooked, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 48.9,
    "energy_kcal": 487.0,
    "fat_g": 30.0,
    "fibre_g": 7.1,
    "folate_ug": 9.0,
    "iron_mg": 1.73,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 205.0,
    "potassium_mg": 261.0,
    "protein_g": 8.3,
    "salt_g": 0.6425,
    "sat_fat_g": 18.36,
    "sodium_mg": 257.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 369.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-961",
  "state": "Cooked",
  "subcategory": "AO",
  "tags": [
    "ao",
    "cooked",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
