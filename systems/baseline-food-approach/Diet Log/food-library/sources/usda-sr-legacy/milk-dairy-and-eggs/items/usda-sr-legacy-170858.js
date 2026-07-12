/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-fluid-yields-2-cups-whipped",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170858",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 239.0,
      "key": "cup-fluid-yields-2-cups-whipped",
      "kind": "unit",
      "label": "cup, fluid (yields 2 cups whipped)"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup-whipped",
      "kind": "unit",
      "label": "cup, whipped"
    }
  ],
  "name": "Cream, fluid, light whipping",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 2.96,
    "energy_kcal": 292.0,
    "fat_g": 30.9,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.03,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 97.0,
    "protein_g": 2.17,
    "salt_g": 0.085,
    "sat_fat_g": 19.3,
    "sodium_mg": 34.0,
    "sugar_g": 2.96,
    "vitamin_a_ug": 279.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170858",
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
