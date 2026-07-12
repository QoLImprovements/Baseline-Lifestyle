/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "racc",
  "description": "Beef Products",
  "id": "usda-foundation-2514743",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Beef, ground, 90% lean meat / 10% fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.14,
    "carbs_g": 0.0,
    "energy_kcal": 185.0,
    "fat_g": 12.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.13,
    "magnesium_mg": 16.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 148.0,
    "potassium_mg": 281.0,
    "protein_g": 18.2,
    "salt_g": 0.154,
    "sat_fat_g": 5.05,
    "sodium_mg": 61.6,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2514743",
  "state": "Raw",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
