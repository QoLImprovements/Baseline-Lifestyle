/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "package",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-foundation-746783",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 450.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 27.9,
      "key": "link",
      "kind": "unit",
      "label": "link"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Sausage, turkey, breakfast links, mild, raw",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 0.93,
    "energy_kcal": 706.0,
    "fat_g": 10.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.17,
    "magnesium_mg": 18.9,
    "omega3_g": 0.204,
    "phosphorus_mg": 178.0,
    "potassium_mg": 310.0,
    "protein_g": 16.7,
    "salt_g": 1.4975,
    "sat_fat_g": 2.53,
    "sodium_mg": 599.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746783",
  "state": "Raw",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "raw",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
