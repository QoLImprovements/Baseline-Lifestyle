/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-whipped",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170859",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup-whipped",
      "kind": "unit",
      "label": "cup, whipped"
    },
    {
      "gramsPerUnit": 238.0,
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
      "gramsPerUnit": 29.8,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Cream, fluid, heavy whipping",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 2.84,
    "energy_kcal": 340.0,
    "fat_g": 36.1,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.1,
    "magnesium_mg": 7.0,
    "omega3_g": 0.151,
    "phosphorus_mg": 58.0,
    "potassium_mg": 95.0,
    "protein_g": 2.84,
    "salt_g": 0.0675,
    "sat_fat_g": 23.0,
    "sodium_mg": 27.0,
    "sugar_g": 2.92,
    "vitamin_a_ug": 411.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170859",
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
