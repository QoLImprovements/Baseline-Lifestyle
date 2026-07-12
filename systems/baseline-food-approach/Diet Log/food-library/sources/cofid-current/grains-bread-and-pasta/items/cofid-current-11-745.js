/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "7 samples, 4 products, organic",
  "id": "cofid-current-11-745",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, cornflakes, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 91.4,
    "energy_kcal": 378.0,
    "fat_g": 0.8,
    "fibre_g": 2.6,
    "folate_ug": 7.0,
    "iron_mg": 0.4,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 93.0,
    "protein_g": 7.1,
    "salt_g": 1.025,
    "sat_fat_g": 0.14,
    "sodium_mg": 410.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.06
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-745",
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
