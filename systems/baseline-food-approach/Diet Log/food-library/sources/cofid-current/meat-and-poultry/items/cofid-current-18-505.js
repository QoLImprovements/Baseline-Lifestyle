/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "8 samples, 8 products, including steak and mushroom and steak and ale",
  "id": "cofid-current-18-505",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, beef, puff or shortcrust pastry, family size, retail",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 18.1,
    "energy_kcal": 220.0,
    "fat_g": 13.0,
    "fibre_g": 2.0,
    "folate_ug": 3.0,
    "iron_mg": 1.1,
    "magnesium_mg": 12.0,
    "omega3_g": 0.24,
    "phosphorus_mg": 91.0,
    "potassium_mg": 150.0,
    "protein_g": 8.9,
    "salt_g": 0.83,
    "sat_fat_g": 5.53,
    "sodium_mg": 332.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-505",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
