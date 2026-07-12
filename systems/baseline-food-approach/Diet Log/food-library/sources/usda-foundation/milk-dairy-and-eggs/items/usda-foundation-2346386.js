/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "racc",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-2346386",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Cream, heavy",
  "nutritionPerBasis": {
    "calcium_mg": 61.2,
    "carbs_g": 3.8,
    "energy_kcal": 343.0,
    "fat_g": 35.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 5.97,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 96.9,
    "protein_g": 2.02,
    "salt_g": 0.0515,
    "sat_fat_g": 20.4,
    "sodium_mg": 20.6,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346386",
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
