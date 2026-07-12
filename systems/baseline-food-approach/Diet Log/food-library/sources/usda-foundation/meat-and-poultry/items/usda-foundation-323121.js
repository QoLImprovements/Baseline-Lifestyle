/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-foundation-323121",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.6,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Frankfurter, beef, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 2.89,
    "energy_kcal": 314.0,
    "fat_g": 28.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.14,
    "magnesium_mg": 11.5,
    "omega3_g": 0.094,
    "phosphorus_mg": 128.0,
    "potassium_mg": 343.0,
    "protein_g": 11.7,
    "salt_g": 2.18,
    "sat_fat_g": 11.4,
    "sodium_mg": 872.0,
    "sugar_g": 1.26,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "323121",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
