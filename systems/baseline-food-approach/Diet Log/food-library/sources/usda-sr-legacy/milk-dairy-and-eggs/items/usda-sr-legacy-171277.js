/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "fl-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171277",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Milk, chocolate beverage, hot cocoa, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 10.7,
    "energy_kcal": 77.0,
    "fat_g": 2.34,
    "fibre_g": 1.0,
    "folate_ug": 5.0,
    "iron_mg": 0.42,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 197.0,
    "protein_g": 3.52,
    "salt_g": 0.11,
    "sat_fat_g": 1.43,
    "sodium_mg": 44.0,
    "sugar_g": 9.66,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171277",
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
