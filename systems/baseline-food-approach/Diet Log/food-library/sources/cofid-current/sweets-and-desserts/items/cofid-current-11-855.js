/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "6 samples, 4 products; frozen and chilled",
  "id": "cofid-current-11-855",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, filo, retail, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 58.9,
    "energy_kcal": 278.0,
    "fat_g": 2.9,
    "fibre_g": 3.4,
    "folate_ug": 11.0,
    "iron_mg": 1.48,
    "magnesium_mg": 17.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 78.0,
    "potassium_mg": 119.0,
    "protein_g": 7.6,
    "salt_g": 0.875,
    "sat_fat_g": 0.32,
    "sodium_mg": 350.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-855",
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
