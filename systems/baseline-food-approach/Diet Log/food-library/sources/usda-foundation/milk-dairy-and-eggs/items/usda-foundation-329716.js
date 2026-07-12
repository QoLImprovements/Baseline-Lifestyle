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
  "id": "usda-foundation-329716",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "sifted",
      "kind": "unit",
      "label": "sifted"
    },
    {
      "gramsPerUnit": 28.4,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Egg, yolk, dried",
  "nutritionPerBasis": {
    "calcium_mg": 270.0,
    "carbs_g": 1.07,
    "energy_kcal": 654.0,
    "fat_g": 55.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 9.28,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 982.0,
    "potassium_mg": 231.0,
    "protein_g": 34.2,
    "salt_g": 0.3725,
    "sat_fat_g": 0.0,
    "sodium_mg": 149.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "329716",
  "state": "Dried",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
