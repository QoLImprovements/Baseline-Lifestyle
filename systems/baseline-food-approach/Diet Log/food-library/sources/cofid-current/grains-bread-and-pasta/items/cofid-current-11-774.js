/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "6 samples, 3 products, organic and value products",
  "id": "cofid-current-11-774",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, wheat biscuits, Weetabix type, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 72.7,
    "energy_kcal": 332.0,
    "fat_g": 1.9,
    "fibre_g": 9.7,
    "folate_ug": 36.0,
    "iron_mg": 3.45,
    "magnesium_mg": 107.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 310.0,
    "potassium_mg": 415.0,
    "protein_g": 10.5,
    "salt_g": 0.695,
    "sat_fat_g": 0.26,
    "sodium_mg": 278.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.45,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-774",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
