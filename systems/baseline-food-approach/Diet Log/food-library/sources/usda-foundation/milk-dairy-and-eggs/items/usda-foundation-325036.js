/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tablespoon",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-325036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.6,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Cheese, parmesan, grated",
  "nutritionPerBasis": {
    "calcium_mg": 884.0,
    "carbs_g": 12.4,
    "energy_kcal": 421.0,
    "fat_g": 28.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.45,
    "magnesium_mg": 34.9,
    "omega3_g": 0.125,
    "phosphorus_mg": 634.0,
    "potassium_mg": 184.0,
    "protein_g": 29.6,
    "salt_g": 4.375,
    "sat_fat_g": 15.5,
    "sodium_mg": 1750.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 228.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "325036",
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
