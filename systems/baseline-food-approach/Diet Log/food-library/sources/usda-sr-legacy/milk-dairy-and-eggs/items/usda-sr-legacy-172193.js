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
  "id": "usda-sr-legacy-172193",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 980.0,
      "key": "quart",
      "kind": "unit",
      "label": "quart"
    }
  ],
  "name": "Milk, reduced fat, fluid, 2% milkfat, with added nonfat milk solids, without added vitamin A",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 5.49,
    "energy_kcal": 232.0,
    "fat_g": 1.98,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.06,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 182.0,
    "protein_g": 3.95,
    "salt_g": 0.1475,
    "sat_fat_g": 1.23,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172193",
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
