/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "6 samples, 4 products, Carmargue rice",
  "id": "cofid-current-11-876",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 80.4,
    "energy_kcal": 356.0,
    "fat_g": 2.9,
    "fibre_g": 4.1,
    "folate_ug": 23.0,
    "iron_mg": 2.15,
    "magnesium_mg": 106.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 314.0,
    "potassium_mg": 242.0,
    "protein_g": 7.0,
    "salt_g": 0.005,
    "sat_fat_g": 0.53,
    "sodium_mg": 2.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-876",
  "state": "Raw",
  "subcategory": "AC",
  "tags": [
    "ac",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
