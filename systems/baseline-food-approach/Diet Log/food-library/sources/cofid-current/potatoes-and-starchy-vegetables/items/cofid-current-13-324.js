/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples. Flesh only; boiled 30 minutes. And literature sources",
  "id": "cofid-current-13-324",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Plantain, boiled in unsalted water, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 28.5,
    "energy_kcal": 112.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 0.5,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 400.0,
    "protein_g": 0.8,
    "salt_g": 0.01,
    "sat_fat_g": 0.1,
    "sodium_mg": 4.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.06
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-324",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
