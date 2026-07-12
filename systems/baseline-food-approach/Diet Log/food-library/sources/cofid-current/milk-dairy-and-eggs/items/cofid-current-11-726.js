/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, including tagliatelle, penne, conchiglie, spaghetti, fusilli",
  "id": "cofid-current-11-726",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, egg, fresh, raw",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 57.0,
    "energy_kcal": 282.0,
    "fat_g": 2.9,
    "fibre_g": 3.3,
    "folate_ug": 18.0,
    "iron_mg": 1.48,
    "magnesium_mg": 31.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 156.0,
    "potassium_mg": 186.0,
    "protein_g": 10.6,
    "salt_g": 0.06,
    "sat_fat_g": 0.71,
    "sodium_mg": 24.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-726",
  "state": "Raw",
  "subcategory": "AD",
  "tags": [
    "ad",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
