/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "6 samples, 4 products, Camargue rice",
  "id": "cofid-current-11-877",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Red rice, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 28.2,
    "energy_kcal": 129.0,
    "fat_g": 1.2,
    "fibre_g": 1.4,
    "folate_ug": 10.0,
    "iron_mg": 0.39,
    "magnesium_mg": 43.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 123.0,
    "potassium_mg": 83.0,
    "protein_g": 3.0,
    "salt_g": 0.0175,
    "sat_fat_g": 0.18,
    "sodium_mg": 7.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-877",
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
