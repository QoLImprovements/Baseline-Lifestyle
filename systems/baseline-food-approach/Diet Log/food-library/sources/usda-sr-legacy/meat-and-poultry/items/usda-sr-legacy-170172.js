/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "tbsp",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170172",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Nuts, coconut milk, raw (liquid expressed from grated meat and water)",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 5.54,
    "energy_kcal": 962.0,
    "fat_g": 23.8,
    "fibre_g": 2.2,
    "folate_ug": 16.0,
    "iron_mg": 1.64,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 263.0,
    "protein_g": 2.29,
    "salt_g": 0.0375,
    "sat_fat_g": 21.1,
    "sodium_mg": 15.0,
    "sugar_g": 3.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170172",
  "state": "Raw",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "meat-and-poultry",
    "nut-and-seed-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
