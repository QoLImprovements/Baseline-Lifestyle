/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 3 products, including Quaker Puffed Wheat and own brands",
  "id": "cofid-current-11-756",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, puffed wheat, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 72.0,
    "energy_kcal": 341.0,
    "fat_g": 2.0,
    "fibre_g": 7.8,
    "folate_ug": 13.0,
    "iron_mg": 2.54,
    "magnesium_mg": 120.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 356.0,
    "potassium_mg": 410.0,
    "protein_g": 13.2,
    "salt_g": 0.005,
    "sat_fat_g": 0.34,
    "sodium_mg": 2.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-756",
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
