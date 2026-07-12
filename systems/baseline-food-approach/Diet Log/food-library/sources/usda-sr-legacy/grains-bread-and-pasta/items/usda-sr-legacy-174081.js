/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "tortilla-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174081",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "tortilla-1-serving",
      "kind": "unit",
      "label": "tortilla 1 serving"
    }
  ],
  "name": "Tortillas, ready-to-bake or -fry, whole wheat",
  "nutritionPerBasis": {
    "calcium_mg": 244.0,
    "carbs_g": 45.9,
    "energy_kcal": 310.0,
    "fat_g": 9.76,
    "fibre_g": 9.8,
    "folate_ug": 138.0,
    "iron_mg": 2.63,
    "magnesium_mg": 85.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 346.0,
    "potassium_mg": 262.0,
    "protein_g": 9.76,
    "salt_g": 1.5425,
    "sat_fat_g": 4.88,
    "sodium_mg": 617.0,
    "sugar_g": 2.44,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174081",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
