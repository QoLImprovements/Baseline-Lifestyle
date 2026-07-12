/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "heart",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168267",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "heart",
      "kind": "unit",
      "label": "heart"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pork, fresh, variety meats and by-products, heart, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 1.33,
    "energy_kcal": 494.0,
    "fat_g": 4.36,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 4.68,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 169.0,
    "potassium_mg": 294.0,
    "protein_g": 17.3,
    "salt_g": 0.14,
    "sat_fat_g": 1.16,
    "sodium_mg": 56.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168267",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
