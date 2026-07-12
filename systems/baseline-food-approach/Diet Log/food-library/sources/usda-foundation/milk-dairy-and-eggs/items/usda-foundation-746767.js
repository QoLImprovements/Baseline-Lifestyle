/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "regular",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-746767",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.9,
      "key": "regular",
      "kind": "unit",
      "label": "regular"
    },
    {
      "gramsPerUnit": 10.9,
      "key": "thin",
      "kind": "unit",
      "label": "thin"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Cheese, swiss",
  "nutritionPerBasis": {
    "calcium_mg": 890.0,
    "carbs_g": 1.44,
    "energy_kcal": 393.0,
    "fat_g": 31.0,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.13,
    "magnesium_mg": 33.4,
    "omega3_g": 0.152,
    "phosphorus_mg": 574.0,
    "potassium_mg": 71.0,
    "protein_g": 27.0,
    "salt_g": 0.4625,
    "sat_fat_g": 18.2,
    "sodium_mg": 185.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 292.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746767",
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
