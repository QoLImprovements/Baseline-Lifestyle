/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands",
  "id": "cofid-current-16-448",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Anchovies, canned in oil, drained",
  "nutritionPerBasis": {
    "calcium_mg": 300.0,
    "carbs_g": 0.0,
    "energy_kcal": 191.0,
    "fat_g": 10.0,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 4.1,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 300.0,
    "potassium_mg": 230.0,
    "protein_g": 25.2,
    "salt_g": 14.675,
    "sat_fat_g": 1.6,
    "sodium_mg": 5870.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-448",
  "state": "Canned",
  "subcategory": "JC",
  "tags": [
    "canned",
    "jc",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
