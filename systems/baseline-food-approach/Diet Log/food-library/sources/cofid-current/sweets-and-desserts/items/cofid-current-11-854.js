/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Calculated from uncooked, using weight loss of 21.1%",
  "id": "cofid-current-11-854",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, flaky/puff, retail, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 42.8,
    "energy_kcal": 486.0,
    "fat_g": 33.2,
    "fibre_g": 3.5,
    "folate_ug": 0.0,
    "iron_mg": 1.44,
    "magnesium_mg": 13.0,
    "omega3_g": 0.46,
    "phosphorus_mg": 61.0,
    "potassium_mg": 112.0,
    "protein_g": 6.7,
    "salt_g": 1.0675,
    "sat_fat_g": 15.92,
    "sodium_mg": 427.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-854",
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
