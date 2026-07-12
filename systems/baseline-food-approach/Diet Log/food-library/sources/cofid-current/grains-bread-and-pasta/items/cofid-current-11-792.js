/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including Ready Brek and own brands",
  "id": "cofid-current-11-792",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, instant hot oat, plain, raw, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 1336.0,
    "carbs_g": 64.6,
    "energy_kcal": 352.0,
    "fat_g": 7.3,
    "fibre_g": 8.5,
    "folate_ug": 170.0,
    "iron_mg": 11.9,
    "magnesium_mg": 104.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 365.0,
    "potassium_mg": 343.0,
    "protein_g": 11.0,
    "salt_g": 0.0125,
    "sat_fat_g": 1.2,
    "sodium_mg": 5.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-792",
  "state": "Raw",
  "subcategory": "AI",
  "tags": [
    "ai",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
