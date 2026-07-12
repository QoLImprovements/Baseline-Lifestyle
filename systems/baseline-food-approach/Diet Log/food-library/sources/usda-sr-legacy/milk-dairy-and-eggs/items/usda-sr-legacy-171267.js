/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quart",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171267",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 976.0,
      "key": "quart",
      "kind": "unit",
      "label": "quart"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Milk, reduced fat, fluid, 2% milkfat, with added vitamin A and vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 4.8,
    "energy_kcal": 210.0,
    "fat_g": 1.98,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.02,
    "magnesium_mg": 11.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 92.0,
    "potassium_mg": 140.0,
    "protein_g": 3.3,
    "salt_g": 0.1175,
    "sat_fat_g": 1.26,
    "sodium_mg": 47.0,
    "sugar_g": 5.06,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171267",
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
