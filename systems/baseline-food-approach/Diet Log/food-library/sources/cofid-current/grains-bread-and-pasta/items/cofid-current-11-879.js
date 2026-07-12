/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "7 samples, 7 products.",
  "id": "cofid-current-11-879",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, white, Italian \"Arborio\" risotto, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 32.2,
    "energy_kcal": 138.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.09,
    "magnesium_mg": 12.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 52.0,
    "potassium_mg": 33.0,
    "protein_g": 3.2,
    "salt_g": 0.01,
    "sat_fat_g": 0.09,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-879",
  "state": "Boiled",
  "subcategory": "AC",
  "tags": [
    "ac",
    "boiled",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
