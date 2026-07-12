/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "racc",
  "description": "Poultry Products",
  "id": "usda-foundation-2514747",
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
  "name": "Turkey, ground, 93% lean/ 7% fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 23.6,
    "carbs_g": 0.0,
    "energy_kcal": 153.0,
    "fat_g": 9.59,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.09,
    "magnesium_mg": 17.3,
    "omega3_g": 0.0,
    "phosphorus_mg": 162.0,
    "potassium_mg": 246.0,
    "protein_g": 17.3,
    "salt_g": 0.2005,
    "sat_fat_g": 2.26,
    "sodium_mg": 80.2,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2514747",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
