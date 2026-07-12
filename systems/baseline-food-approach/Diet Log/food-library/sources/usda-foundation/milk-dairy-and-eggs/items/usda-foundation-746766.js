/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-2-cup",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-746766",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.6,
      "key": "0-2-cup",
      "kind": "unit",
      "label": "0.2 cup"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Cheese, ricotta, whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 224.0,
    "carbs_g": 6.86,
    "energy_kcal": 657.0,
    "fat_g": 11.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.1,
    "magnesium_mg": 19.7,
    "omega3_g": 0.054,
    "phosphorus_mg": 162.0,
    "potassium_mg": 230.0,
    "protein_g": 7.81,
    "salt_g": 0.2625,
    "sat_fat_g": 6.97,
    "sodium_mg": 105.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 127.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746766",
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
