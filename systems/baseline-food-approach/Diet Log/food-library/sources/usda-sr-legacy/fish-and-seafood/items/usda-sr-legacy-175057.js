/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "0-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175057",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    }
  ],
  "name": "Crackers, saltines, unsalted tops (includes oyster, soda, soup)",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 71.5,
    "energy_kcal": 1820.0,
    "fat_g": 11.8,
    "fibre_g": 3.0,
    "folate_ug": 124.0,
    "iron_mg": 5.4,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 128.0,
    "protein_g": 9.2,
    "salt_g": 1.915,
    "sat_fat_g": 2.93,
    "sodium_mg": 766.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175057",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
