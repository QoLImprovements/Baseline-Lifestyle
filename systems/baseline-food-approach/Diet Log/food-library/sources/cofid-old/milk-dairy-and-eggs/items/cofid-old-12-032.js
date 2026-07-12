/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Mixed sample, different brands",
  "id": "cofid-old-12-032",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, whole, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1020.0,
    "carbs_g": 39.4,
    "energy_kcal": 490.0,
    "fat_g": 26.3,
    "fibre_g": 0.0,
    "folate_ug": 46.0,
    "iron_mg": 0.4,
    "magnesium_mg": 84.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 740.0,
    "potassium_mg": 1270.0,
    "protein_g": 26.3,
    "salt_g": 1.1,
    "sat_fat_g": 16.5,
    "sodium_mg": 440.0,
    "sugar_g": 39.4,
    "vitamin_a_ug": 318.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-032",
  "state": "Dried",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
