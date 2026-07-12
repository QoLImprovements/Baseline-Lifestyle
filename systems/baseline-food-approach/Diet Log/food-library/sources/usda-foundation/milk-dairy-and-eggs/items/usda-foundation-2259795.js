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
  "id": "usda-foundation-2259795",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Cheese, parmesan, grated, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 950.0,
    "carbs_g": 4.33,
    "energy_kcal": 403.0,
    "fat_g": 29.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.14,
    "magnesium_mg": 35.4,
    "omega3_g": 0.0,
    "phosphorus_mg": 625.0,
    "potassium_mg": 74.0,
    "protein_g": 30.1,
    "salt_g": 2.625,
    "sat_fat_g": 17.2,
    "sodium_mg": 1050.0,
    "sugar_g": 0.638,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2259795",
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
