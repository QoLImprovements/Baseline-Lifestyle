/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Calculated from medium cooked noodles",
  "id": "cofid-current-11-941",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Noodles, egg, fine, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 27.5,
    "energy_kcal": 129.0,
    "fat_g": 0.8,
    "fibre_g": 2.3,
    "folate_ug": 5.0,
    "iron_mg": 0.85,
    "magnesium_mg": 19.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 68.0,
    "potassium_mg": 57.0,
    "protein_g": 4.7,
    "salt_g": 0.2725,
    "sat_fat_g": 0.12,
    "sodium_mg": 109.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-941",
  "state": "Boiled",
  "subcategory": "AD",
  "tags": [
    "ad",
    "boiled",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
