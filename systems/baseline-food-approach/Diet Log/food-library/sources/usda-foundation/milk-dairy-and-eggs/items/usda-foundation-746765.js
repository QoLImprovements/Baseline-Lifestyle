/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "grated",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-746765",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 97.3,
      "key": "grated",
      "kind": "unit",
      "label": "grated"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Cheese, dry white, queso seco",
  "nutritionPerBasis": {
    "calcium_mg": 661.0,
    "carbs_g": 2.07,
    "energy_kcal": 1360.0,
    "fat_g": 24.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.18,
    "magnesium_mg": 26.7,
    "omega3_g": 0.138,
    "phosphorus_mg": 475.0,
    "potassium_mg": 116.0,
    "protein_g": 24.5,
    "salt_g": 4.525,
    "sat_fat_g": 13.7,
    "sodium_mg": 1810.0,
    "sugar_g": 0.43,
    "vitamin_a_ug": 226.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746765",
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
