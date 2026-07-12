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
  "id": "cofid-current-11-1010",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, wholemeal, uncooked, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 42.3,
    "energy_kcal": 421.0,
    "fat_g": 25.9,
    "fibre_g": 6.1,
    "folate_ug": 16.0,
    "iron_mg": 1.5,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 177.0,
    "potassium_mg": 225.0,
    "protein_g": 7.2,
    "salt_g": 0.555,
    "sat_fat_g": 15.86,
    "sodium_mg": 222.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 320.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.97,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1010",
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
