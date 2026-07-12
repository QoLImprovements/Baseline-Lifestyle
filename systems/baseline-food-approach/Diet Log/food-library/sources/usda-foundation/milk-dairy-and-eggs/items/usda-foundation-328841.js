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
  "id": "usda-foundation-328841",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Cheese, cottage, lowfat, 2% milkfat",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 4.31,
    "energy_kcal": 84.0,
    "fat_g": 2.3,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.13,
    "magnesium_mg": 8.9,
    "omega3_g": 0.009,
    "phosphorus_mg": 148.0,
    "potassium_mg": 120.0,
    "protein_g": 11.0,
    "salt_g": 0.8025,
    "sat_fat_g": 1.26,
    "sodium_mg": 321.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "328841",
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
