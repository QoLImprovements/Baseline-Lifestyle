/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "racc",
  "description": "Nut and Seed Products",
  "id": "usda-foundation-2515377",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Flour, chestnut",
  "nutritionPerBasis": {
    "calcium_mg": 55.8,
    "carbs_g": 80.5,
    "energy_kcal": 385.0,
    "fat_g": 4.64,
    "fibre_g": 8.71,
    "folate_ug": 0.0,
    "iron_mg": 1.62,
    "magnesium_mg": 68.8,
    "omega3_g": 0.0,
    "phosphorus_mg": 134.0,
    "potassium_mg": 1030.0,
    "protein_g": 5.29,
    "salt_g": 0.0,
    "sat_fat_g": 0.689,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.05,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2515377",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "grains-bread-and-pasta",
    "nut-and-seed-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
