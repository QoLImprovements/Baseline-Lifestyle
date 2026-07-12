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
  "id": "usda-foundation-2514744",
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
  "name": "Beef, ground, 80% lean meat / 20% fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.89,
    "carbs_g": 0.0,
    "energy_kcal": 243.0,
    "fat_g": 19.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.96,
    "magnesium_mg": 16.4,
    "omega3_g": 0.0,
    "phosphorus_mg": 144.0,
    "potassium_mg": 273.0,
    "protein_g": 17.5,
    "salt_g": 0.13725,
    "sat_fat_g": 6.84,
    "sodium_mg": 54.9,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2514744",
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
