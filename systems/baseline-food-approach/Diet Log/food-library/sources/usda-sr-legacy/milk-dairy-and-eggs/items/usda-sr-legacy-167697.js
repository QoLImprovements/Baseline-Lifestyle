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
  "id": "usda-sr-legacy-167697",
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
      "gramsPerUnit": 30.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Milk, buttermilk, fluid, cultured, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 5.3,
    "energy_kcal": 56.0,
    "fat_g": 2.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.06,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 180.0,
    "protein_g": 4.1,
    "salt_g": 0.2625,
    "sat_fat_g": 1.24,
    "sodium_mg": 105.0,
    "sugar_g": 5.3,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167697",
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
