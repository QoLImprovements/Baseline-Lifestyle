/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Calculated from uncooked, using weight loss of 23.6%",
  "id": "cofid-current-11-856",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, filo, retail, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 77.1,
    "energy_kcal": 363.0,
    "fat_g": 3.8,
    "fibre_g": 4.5,
    "folate_ug": 15.0,
    "iron_mg": 1.94,
    "magnesium_mg": 23.0,
    "omega3_g": 0.2,
    "phosphorus_mg": 102.0,
    "potassium_mg": 156.0,
    "protein_g": 10.0,
    "salt_g": 1.15,
    "sat_fat_g": 0.42,
    "sodium_mg": 460.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-856",
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
