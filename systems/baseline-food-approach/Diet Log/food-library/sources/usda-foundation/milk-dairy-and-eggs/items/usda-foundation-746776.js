/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-746776",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Milk, nonfat, fluid, with added vitamin A and vitamin D (fat free or skim)",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 4.92,
    "energy_kcal": 34.0,
    "fat_g": 0.08,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.0,
    "magnesium_mg": 12.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 167.0,
    "protein_g": 3.43,
    "salt_g": 0.1025,
    "sat_fat_g": 0.049,
    "sodium_mg": 41.0,
    "sugar_g": 5.05,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746776",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
